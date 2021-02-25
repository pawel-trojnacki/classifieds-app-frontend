import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { clearFilters } from 'store/filters/actions';
import { RootState } from 'store/root/store';

const ClearFiltersButton: FC = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearFilters());
  };
  return (
    <Button
      variant="outlined"
      color={dark ? 'default' : 'primary'}
      onClick={handleClick}
    >
      Clear
    </Button>
  );
};

export default ClearFiltersButton;
