import { Reducer } from 'redux';
import { ThemeActions } from './theme-actions.enum';

export interface ThemeState {
  dark: boolean;
}

const isDarkMode =
  !!window && typeof window !== 'undefined'
    ? !!localStorage.getItem('dark')
    : false;

const initialState: ThemeState = {
  dark: isDarkMode,
};

export const themeReducer: Reducer<ThemeState> = (
  state = initialState,
  { type }
) => {
  switch (type) {
    case ThemeActions.ChangeTheme:
      state.dark
        ? localStorage.removeItem('dark')
        : localStorage.setItem('dark', 'true');
      return {
        ...state,
        dark: !state.dark,
      };
    default:
      return state;
  }
};
