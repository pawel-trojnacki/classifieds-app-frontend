import { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LogoIcon from 'assets/svg/logo-icon.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'block',
      width: '140px',
      margin: '0 auto',
      [theme.breakpoints.up('sm')]: {
        width: '160px',
      },
    },
  })
);

const Logo: FC = () => {
  const classes = useStyles();
  return <img className={classes.root} src={LogoIcon} alt="Elctr logo" />;
};

export default Logo;
