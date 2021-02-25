import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab as MuiTab, TabProps } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { setFilter } from 'store/filters/actions';
import { FiltersType } from 'store/filters/reducer';
import { RootState } from 'store/root/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    labelIcon: {
      opacity: 1,
      width: '100px',
      paddingTop: 9,
      '& $wrapper > *:first-child': {
        marginBottom: 6,
      },
      [theme.breakpoints.up('sm')]: {
        width: '120px',
      },
    },
    wrapper: {
      fontSize: '10px',
      [theme.breakpoints.up('sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '14px',
      },
    },
  })
);

const Tab: FC<TabProps> = (props) => {
  const { label } = props;
  const classes = useStyles();

  const currentCategory = useSelector(
    (state: RootState) => state.filters.category
  );
  const dispatch = useDispatch();

  const category = typeof label === 'string' ? label : 'all';

  const handleClick = () => {
    if (category !== currentCategory) {
      dispatch(setFilter({ filter: FiltersType.Page, value: 1 }));
      dispatch(setFilter({ filter: FiltersType.Category, value: category }));
    }
  };

  return (
    <MuiTab
      onClick={handleClick}
      classes={{
        labelIcon: classes.labelIcon,
        wrapper: classes.wrapper,
      }}
      {...props}
    />
  );
};

export default Tab;
