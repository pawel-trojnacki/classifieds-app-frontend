import { FC, SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { RootState } from 'store/root/store';
import { useDidMountEffect } from 'hooks/useDidMountEffect';

const LogoutSnackbar: FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  useDidMountEffect(() => {
    if (!isAuthenticated) {
      setIsOpen(true);
    }
  }, [isAuthenticated]);
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      data-testid="snackbar"
    >
      <Alert severity="success" variant="filled" onClose={handleClose}>
        Logged out successfully!
      </Alert>
    </Snackbar>
  );
};

export default LogoutSnackbar;
