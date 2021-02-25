import { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';
import { RootState } from 'store/root/store';

const ThemeProvider: FC = ({ children }) => {
  const dark = useSelector((state: RootState) => state.theme.dark);

  const theme = dark ? darkTheme : lightTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
