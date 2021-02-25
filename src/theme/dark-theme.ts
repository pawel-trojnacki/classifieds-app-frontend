import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { darkBg, primary, secondary } from './constants/colors';
import { common } from './constants/common';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary,
    secondary,
    background: darkBg,
  },
  ...(common as any),
});

export const darkTheme = responsiveFontSizes(theme);
