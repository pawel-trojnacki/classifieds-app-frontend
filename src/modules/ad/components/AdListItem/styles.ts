import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      listStyle: 'none',
    },
    paper: {
      width: '100%',
      margin: '20px 0',
      boxShadow: '0px 4px 14px -11px rgba(0,0,0,0.75)',
      [theme.breakpoints.up('sm')]: {
        margin: '40px 0',
      },
      '&:hover': {
        boxShadow: '0px 5px 14px -9px rgba(0,0,0,0.7)',
      },
    },
    img: {
      display: 'block',
      width: '100%',
      height: '140px',
      objectFit: 'cover',
      objectPosition: 'center',
      [theme.breakpoints.up('sm')]: {
        height: '160px',
      },
      [theme.breakpoints.up('md')]: {
        height: '180px',
      },
    },
    content: {
      height: '100%',
      padding: '10px',
      [theme.breakpoints.up('sm')]: {
        padding: '20px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '30px 40px 20px',
      },
    },
  })
);
