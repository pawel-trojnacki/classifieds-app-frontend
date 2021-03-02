import { FC } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type T = string | number;
interface Option {
  value: T;
  title?: string;
}

export interface Props extends SelectProps {
  id: string;
  options: Option[];
  handleChange: any;
  variant?: 'outlined' | 'filled';
  helperText?: string | false;
}

const useStyles = makeStyles({
  capitalize: {
    textTransform: 'capitalize',
  },
});

const Select: FC<Props> = ({
  id,
  options,
  handleChange,
  variant,
  helperText,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth variant={variant || 'standard'} error={rest.error}>
      <InputLabel id={id}>{rest.label}</InputLabel>
      <MuiSelect
        className={classes.capitalize}
        labelId={id}
        onChange={handleChange}
        data-testid="mui-select"
        {...rest}
      >
        {options.map(({ value, title }) => (
          <MenuItem className={classes.capitalize} key={value} value={value}>
            {title || value}
          </MenuItem>
        ))}
      </MuiSelect>
      {!!helperText && !!rest.error && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
