import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      [theme.breakpoints.up('md')]: {
        maxWidth: '60%',
        margin: '15vh 0 20vh 5%',
      },
    },
    fixed: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: '50px',
      },
      [theme.breakpoints.up('md')]: {
        width: '25%',
        position: 'fixed',
        top: '15vh',
        right: '5%',
      },
    },
  })
);
