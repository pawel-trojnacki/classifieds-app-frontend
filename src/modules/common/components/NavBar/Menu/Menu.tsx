import { FC, useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AccountCircle as AccountIcon } from '@material-ui/icons';
import { Menu as MuiMenu, MenuItem } from '@material-ui/core';
import IconButton from 'modules/common/components/IconButton';
import Link from 'modules/common/components/Link';
import { MENU_LINKS } from 'modules/common/constants/menu-links';
import { logout } from 'store/auth/actions';

const Menu: FC = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <>
      <IconButton
        tooltip="User menu"
        ariaLabel="user menu"
        ariaControls="user-menu"
        onClick={handleMenu}
      >
        <AccountIcon />
      </IconButton>
      <MuiMenu
        id="user-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {MENU_LINKS.map(({ text, path }) => (
          <Link key={text} to={path}>
            <MenuItem onClick={handleClose}>{text.toUpperCase()}</MenuItem>
          </Link>
        ))}
        <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
      </MuiMenu>
    </>
  );
};

export default Menu;
