import { FC } from 'react';
import { Toolbar as MuiToolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle as AccountIcon } from '@material-ui/icons';
import SwitchMode from '../SwitchMode';
import Menu from '../Menu';
import Title from '../Title';
import ButtonBack from '../ButtonBack';
import Link from 'modules/common/components/Link';
import IconButton from 'modules/common/components/IconButton';

interface ToopbarPrimaryProps {
  isAuthenticated: boolean;
  type: 'main' | 'other';
}

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
  },
});

export const Toolbar: FC<ToopbarPrimaryProps> = ({ isAuthenticated, type }) => {
  const classes = useStyles();

  return (
    <MuiToolbar className={classes.toolbar}>
      {type === 'main' ? <Title /> : <ButtonBack />}
      <div>
        {isAuthenticated ? (
          <Link to="/post-ad" white>
            <Button color="inherit" component="span">
              Post ad
            </Button>
          </Link>
        ) : (
          <Link to="/auth" white>
            <Button color="inherit" component="span">
              Post ad
            </Button>
          </Link>
        )}

        <SwitchMode />
        {isAuthenticated ? (
          <Menu />
        ) : (
          <Link to="/auth" white>
            <IconButton
              tooltip="Login / Signup"
              link
              ariaLabel="login or signup"
            >
              <AccountIcon />
            </IconButton>
          </Link>
        )}
      </div>
    </MuiToolbar>
  );
};

export default Toolbar;
