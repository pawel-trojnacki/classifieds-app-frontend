import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CircularProgress, Fab, Tooltip } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import {
  Favorite as FavouriteFilledIcon,
  FavoriteBorder as FavouriteBorderIcon,
} from '@material-ui/icons';
import { RootState } from 'store/root/store';
import { patchFavourites } from 'store/data/actions';
import Link from 'modules/common/components/Link';

interface ParamType {
  id: string;
}

const options = (isFavourite: boolean) =>
  isFavourite
    ? {
        title: 'Remove from favourites',
        icon: () => <FavouriteFilledIcon />,
      }
    : {
        title: 'Add to favourites',
        icon: () => <FavouriteBorderIcon />,
      };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fab: {
      backgroundColor: red[600],
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: red[900],
      },
    },
    progress: {
      color: red[600],
    },
  })
);

const CarouselActions: FC = () => {
  const classes = useStyles();
  const { id } = useParams<ParamType>();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const data = useSelector((state: RootState) => state.data);
  const { favouriteAds, isLoading } = data;
  const isFavourite = favouriteAds.map((ad) => ad._id).includes(id);

  const handleRemoveButtonClick = () => {
    dispatch(patchFavourites(id, 'remove'));
  };

  const handleAddButtonClick = () => {
    dispatch(patchFavourites(id, 'add'));
  };

  const { title, icon: Icon } = options(isFavourite);

  if (!isAuthenticated) {
    return (
      <div className={classes.root}>
        <Tooltip
          title="Sign in to add classified to favourites"
          aria-label="sign in redirect"
        >
          <Link to="/auth">
            <Fab className={classes.fab} component="span">
              <FavouriteBorderIcon />
            </Fab>
          </Link>
        </Tooltip>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {isLoading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <Tooltip title={title} aria-label={title}>
          <Fab
            className={classes.fab}
            onClick={
              isFavourite ? handleRemoveButtonClick : handleAddButtonClick
            }
            disabled={isLoading}
          >
            <Icon />
          </Fab>
        </Tooltip>
      )}
    </div>
  );
};

export default CarouselActions;
