import { Dispatch } from 'redux';
import { ThemeActions } from './theme-actions.enum';

interface ChangeThemeDispatch {
  type: ThemeActions.ChangeTheme;
}

export const changeTheme = () => (dispatch: Dispatch<ChangeThemeDispatch>) => {
  dispatch({ type: ThemeActions.ChangeTheme });
};
