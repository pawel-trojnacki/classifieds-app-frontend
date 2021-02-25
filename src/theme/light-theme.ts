import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { primary, secondary } from './constants/colors';
import { common } from './constants/common';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary,
    secondary,
    background: {
      default: '#fff',
    },
  },
  ...(common as any),
});

export const lightTheme = responsiveFontSizes(theme);
