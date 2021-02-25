import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RootState } from 'store/root/store';

const useStyles = makeStyles({
  root: {
    textTransform: 'capitalize',
  },
});

const Title: FC = () => {
  const classes = useStyles();
  const category = useSelector((state: RootState) => state.filters.category);
  return (
    <Typography className={classes.root} variant="h6" component="h1">
      {category === 'all' ? 'Classifieds' : category}
    </Typography>
  );
};

export default Title;
