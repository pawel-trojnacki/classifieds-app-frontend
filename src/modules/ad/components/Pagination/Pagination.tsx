import { ChangeEvent, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import { Pagination as MuiPagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'store/root/store';
import { setFilter } from 'store/filters/actions';
import { FiltersType } from 'store/filters/reducer';

const useStyles = makeStyles({
  pagination: {
    display: 'inline-block',
  },
});

const Pagination: FC = () => {
  const classes = useStyles();
  const pages = useSelector((state: RootState) => state.data.pages);
  const page = useSelector((state: RootState) => state.filters.page);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setFilter({ filter: FiltersType.Page, value }));
  };

  return (
    <Box marginY={{ xs: 3, md: 4 }} textAlign="center">
      {pages > 1 ? (
        <MuiPagination
          count={pages}
          page={page}
          onChange={handleChange}
          color="primary"
          classes={{ root: classes.pagination }}
        />
      ) : null}
    </Box>
  );
};

export default Pagination;
