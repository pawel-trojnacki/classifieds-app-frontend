import { FC } from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Delete as DeleteIcon, Undo as UndoIcon } from '@material-ui/icons';

type Func = (image: string) => void;

interface Props {
  image: string;
  isRemoved: boolean;
  handleRemoveButtonClick: Func;
  handleUndoButtonClick: Func;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    img: {
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      height: '200px',
      [theme.breakpoints.up('md')]: {
        height: '160px',
      },
      transition: 'opacity 0.3s',
    },
    removed: {
      opacity: '25%',
    },
  })
);

const ImageField: FC<Props> = ({
  image,
  isRemoved,
  handleRemoveButtonClick,
  handleUndoButtonClick,
}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12} sm={6} md={4}>
      <img
        className={
          isRemoved ? `${classes.img} ${classes.removed}` : classes.img
        }
        src={`${process.env.REACT_APP_IMG_BASE_URL}/${image}`}
        alt=""
      />
      {isRemoved ? (
        <Button
          variant="contained"
          fullWidth
          startIcon={<UndoIcon />}
          style={{ borderRadius: 0 }}
          onClick={() => handleRemoveButtonClick(image)}
        >
          Undo
        </Button>
      ) : (
        <Button
          variant="contained"
          fullWidth
          startIcon={<DeleteIcon />}
          style={{ borderRadius: 0 }}
          onClick={() => handleUndoButtonClick(image)}
        >
          Remove
        </Button>
      )}
    </Grid>
  );
};

export default ImageField;
