import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Favorite as FavouriteIcon } from '@material-ui/icons';
import IconButton from 'modules/common/components/IconButton';
import { patchFavourites } from 'store/data/actions';

interface Props {
  _id: string;
}

const ActionsFavourites: FC<Props> = ({ _id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(patchFavourites(_id, 'remove'));
  };
  return (
    <div>
      <IconButton
        tooltip="Remove from favourites"
        ariaLabel="remove from favourites"
        red
        size="small"
        onClick={handleClick}
      >
        <FavouriteIcon />
      </IconButton>
    </div>
  );
};

export default ActionsFavourites;
