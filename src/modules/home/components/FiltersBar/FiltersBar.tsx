import { FC, useState } from 'react';
import { Button, Grid, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomDrawer from '../BottomDrawer';
import Filters from '../Filters';
import SearchInput from '../SearchInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: '100%',
      padding: '0 30px 10px 0px',
      boxShadow: '0px 5px 7px 5px rgba(0, 0, 0, 0.7)',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.up('md')]: {
        padding: '10px 40px 20px 20px',
      },
    },
    container: {
      maxWidth: '1240px',
      margin: '0 auto',
    },
  })
);

const FiltersBar: FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.root}>
      <Grid
        className={classes.container}
        container
        alignItems="flex-end"
        spacing={4}
      >
        <Grid item xs={8} sm={10} md={3} lg={4}>
          <SearchInput />
        </Grid>
        <Grid item xs={4} sm={2} md={9} lg={8}>
          <Hidden smDown>
            <Filters />
          </Hidden>
          <Hidden mdUp>
            <Button onClick={toggleDrawer} variant="contained" color="primary">
              Filters
            </Button>
          </Hidden>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <BottomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </Hidden>
    </div>
  );
};

export default FiltersBar;
