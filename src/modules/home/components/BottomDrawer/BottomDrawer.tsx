import { FC } from 'react';
import { Box, Button, Drawer, Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Filters from '../Filters';
import ClearFiltersButton from '../ClearFiltersButton';

export interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '40px 20px',
    },
  })
);

const BottomDrawer: FC<Props> = ({ isOpen, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={toggleDrawer}>
      <Paper className={classes.root}>
        <Filters />
        <Box marginTop={3}>
          <Grid container justify="flex-end" spacing={3}>
            <Grid item>
              <ClearFiltersButton />
            </Grid>
            <Grid item>
              <Button
                onClick={toggleDrawer}
                variant="contained"
                color="primary"
              >
                Done
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Drawer>
  );
};

export default BottomDrawer;
