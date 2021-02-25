import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '12px 5px',
      boxShadow: '0px 4px 14px -11px rgba(0,0,0,0.75)',
      [theme.breakpoints.up('sm')]: {
        margin: '20px 12px',
      },
      '&:hover': {
        boxShadow: '0px 5px 14px -9px rgba(0,0,0,0.7)',
      },
    },
    media: {
      height: '140px',
      [theme.breakpoints.up('sm')]: {
        height: '180px',
      },
    },
    content: {
      height: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })
);
