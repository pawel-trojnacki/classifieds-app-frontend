import { FC } from 'react';
import {
  Button,
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteAd } from 'store/data/actions';

interface Props {
  open: boolean;
  handleClose: () => void;
  _id: string;
}

const Dialog: FC<Props> = ({ open, handleClose, _id }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = async () => {
    dispatch(deleteAd(_id));
    handleClose();
    // temporary solution
    window.location.reload();
  };

  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete this ad?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This operation is irreversible. You will lose photos and information
          about the ad, as well as users who follow your ad.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="outlined">
          Close
        </Button>
        <Button
          onClick={handleDeleteButtonClick}
          color="primary"
          variant="contained"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
