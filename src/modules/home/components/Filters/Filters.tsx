import { ChangeEvent, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Select from 'modules/common/components/Select';
import Switch from 'modules/common/components/Switch';
import ClearFiltersButton from '../ClearFiltersButton';
import {
  minPriceOptions,
  maxPriceOptions,
} from 'modules/home/constants/price-steps';
import { sortOptions } from 'modules/home/constants/sort-options';
import { RootState } from 'store/root/store';
import { allowedPrice } from 'constants/allowed-price';
import { setFilter } from 'store/filters/actions';
import { FiltersType } from 'store/filters/reducer';

type Name = FiltersType.Sort | FiltersType.MinPrice | FiltersType.MaxPrice;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-end',
    },
  })
);

const Filters: FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const { sort, minprice, maxprice, withimages } = filters;

  const handleSelectChange = (
    e: ChangeEvent<{ value: number | string; name: Name }>
  ) => {
    dispatch(setFilter({ filter: FiltersType.Page, value: 1 }));
    dispatch(setFilter({ filter: e.target.name, value: e.target.value }));
  };

  const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ filter: FiltersType.Page, value: 1 }));
    dispatch(
      setFilter({ filter: FiltersType.WithImages, value: e.target.checked })
    );
  };

  const minPriceActiveOptions = minPriceOptions.filter(
    (option) => option.value < maxprice
  );
  const maxPriceActiveOptions = maxPriceOptions.filter(
    (option) => option.value > minprice
  );

  return (
    <div className={classes.root}>
      <Grid container alignItems="flex-end" spacing={3}>
        <Grid item xs={12} md={3}>
          <Select
            value={sort}
            label="Sort"
            name={FiltersType.Sort}
            handleChange={handleSelectChange}
            id="sort-by"
            options={sortOptions}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Select
            value={minprice > allowedPrice.min ? minprice : ''}
            label="Min price"
            name={FiltersType.MinPrice}
            handleChange={handleSelectChange}
            id="min-price-filter"
            options={minPriceActiveOptions}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Select
            value={maxprice < allowedPrice.max ? maxprice : ''}
            label="Max price"
            name={FiltersType.MaxPrice}
            handleChange={handleSelectChange}
            id="max-price-filter"
            options={maxPriceActiveOptions}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Switch
            isChecked={withimages}
            handleSwitchChange={handleSwitchChange}
            label="With images"
          />
        </Grid>
      </Grid>
      <Hidden smDown>
        <div>
          <ClearFiltersButton />
        </div>
      </Hidden>
    </div>
  );
};

export default Filters;
