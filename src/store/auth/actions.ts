import { Dispatch } from 'redux';
import { handleError, handleUnknownError } from '../utils';
import { MainResponse, ErrorResponse } from 'types/responses';
import { LoginPayload, SignupPayload } from 'types/auth-payload.interface';
import { AuthActions } from './auth-actions.enum';

export const login = (loginPayload: LoginPayload) => async (
  dispatch: Dispatch
) => {
  const query = `${process.env.REACT_APP_API_URL}/auth/login`;

  const requestOptions: RequestInit = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`,
    },
    body: JSON.stringify(loginPayload),
  };

  dispatch({ type: AuthActions.AuthRequest });

  try {
    const response: MainResponse = await fetch(
      query,
      requestOptions
    ).then((res) => res.json());

    if ('error' in response) {
      return dispatch(handleError(response as ErrorResponse, 'auth'));
    }

    dispatch({ type: AuthActions.LoginSuccess });
  } catch {
    return dispatch(handleUnknownError('auth'));
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  const query = `${process.env.REACT_APP_API_URL}/auth/logout`;

  const requestOptions: RequestInit = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`,
    },
  };

  dispatch({ type: AuthActions.AuthRequest });

  try {
    const response: MainResponse = await fetch(
      query,
      requestOptions
    ).then((res) => res.json());

    if ('error' in response) {
      return dispatch(handleError(response as ErrorResponse, 'auth'));
    }

    dispatch({ type: AuthActions.Logout });
  } catch {
    return dispatch(handleUnknownError('auth'));
  }
};

export const signup = (signupPayload: SignupPayload) => async (
  dispatch: Dispatch
) => {
  const query = `${process.env.REACT_APP_API_URL}/users`;

  const requestOptions: RequestInit = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`,
    },
    body: JSON.stringify(signupPayload),
  };

  dispatch({ type: AuthActions.AuthRequest });

  try {
    const response: MainResponse = await fetch(
      query,
      requestOptions
    ).then((res) => res.json());

    if ('error' in response) {
      return dispatch(handleError(response as ErrorResponse, 'auth'));
    }

    dispatch({ type: AuthActions.LoginSuccess });
  } catch {
    return dispatch(handleUnknownError('auth'));
  }
};

export const clearError = () => (dispatch: Dispatch) => {
  dispatch({ type: AuthActions.ClearError });
};
