import { FC, useState, MouseEvent } from 'react';
import {
  Box,
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';

const TextInput: FC<TextFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  if (props.name === 'password') {
    return (
      <Box paddingBottom={3}>
        <TextField
          {...props}
          variant={props.variant || 'outlined'}
          fullWidth
          type={showPassword ? 'text' : 'password'}
          data-testid="text-input"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" data-testid="password-adornment">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    );
  }
  return (
    <Box paddingBottom={3}>
      <TextField
        data-testid="text-input"
        {...props}
        variant={props.variant || 'outlined'}
        fullWidth
        autoComplete="off"
      />
    </Box>
  );
};

export default TextInput;
