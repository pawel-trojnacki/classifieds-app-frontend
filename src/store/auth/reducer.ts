import { Reducer } from 'redux';
import { AuthActions } from './auth-actions.enum';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null | string;
}

const isAuth =
  !!window && typeof window !== 'undefined'
    ? !!localStorage.getItem('auth')
    : false;

export const initialState: AuthState = {
  isAuthenticated: isAuth,
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
      localStorage.setItem('auth', 'true');
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    case AuthActions.Logout:
      localStorage.removeItem('auth');
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
