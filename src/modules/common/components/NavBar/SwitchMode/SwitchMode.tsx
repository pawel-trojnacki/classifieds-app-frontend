import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from 'modules/common/components/IconButton';
import {
  Brightness4 as MoonIcon,
  Brightness7 as SunIcon,
} from '@material-ui/icons';
import { RootState } from 'store/root/store';
import { changeTheme } from 'store/theme/actions';

const SwitchMode: FC = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(changeTheme());
  };

  return (
    <IconButton
      tooltip="Change theme"
      onClick={handleButtonClick}
      ariaLabel="change theme"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default SwitchMode;
