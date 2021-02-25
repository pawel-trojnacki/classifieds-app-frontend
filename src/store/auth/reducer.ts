import { Reducer } from 'redux';
import { AuthActions } from './auth-actions.enum';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null | string;
}

export const initialState: AuthState = {
  isAuthenticated: document?.cookie ? document.cookie.includes('jwt') : false,
  isLoading: false,
  error: null,
};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case AuthActions.AuthRequest:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.LoginSuccess:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    case AuthActions.Logout:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };
    case AuthActions.LoginError:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case AuthActions.ClearError:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
