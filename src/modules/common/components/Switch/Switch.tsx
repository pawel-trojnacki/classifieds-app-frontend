import { ChangeEvent, FC } from 'react';
import {
  FormControlLabel,
  Switch as MuiSwitch,
  Typography,
} from '@material-ui/core';

interface Props {
  isChecked: boolean;
  handleSwitchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Switch: FC<Props> = ({ isChecked, handleSwitchChange, label }) => {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          checked={isChecked}
          onChange={handleSwitchChange}
          name="isChecked"
        />
      }
      label={<Typography variant="body2">{label}</Typography>}
    />
  );
};

export default Switch;
