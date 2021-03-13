import { ErrorResponse } from 'types/responses';
import { AuthActions } from './auth/auth-actions.enum';
import { DataActions } from './data/data-actions.enum';

export type ErrorOption =
  | 'data'
  | 'data-user'
  | 'data-favourites'
  | 'data-post'
  | 'data-delete'
  | 'auth';

const dispatchType = (option: ErrorOption) => {
  switch (option) {
    case 'data':
      return { type: DataActions.FetchError };
    case 'data-user':
      return { type: DataActions.FetchUserAdsError };
    case 'data-favourites':
      return { type: DataActions.FetchFavouritesError };
    case 'data-post':
      return { type: DataActions.PostError };
    case 'data-delete':
      return { type: DataActions.DeleteError };
    case 'auth':
      return { type: AuthActions.LoginError };
    default:
      return { type: DataActions.FetchError };
  }
};

export const handleError = (
  data: ErrorResponse,
  option: ErrorOption = 'data'
) => ({
  ...dispatchType(option),
  payload: data.message
    ? typeof data.message === 'string'
      ? data.message
      : data.message[0]
    : data.error,
});

export const handleUnknownError = (option: ErrorOption = 'data') => ({
  ...dispatchType(option),
  payload: 'Unknown error occured',
});
