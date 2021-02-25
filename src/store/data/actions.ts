import { Dispatch } from 'redux';
import { FiltersState } from 'store/filters/reducer';
import {
  ErrorResponse,
  FetchAdsResponse,
  FetchSingleAdResponse,
  FetchUserAdsResponse,
  MainResponse,
} from 'types/responses';
import { handleError, handleUnknownError, ErrorOption } from '../utils';
import { DataActions } from './data-actions.enum';

export const fetchAds = (filters: FiltersState) => async (
  dispatch: Dispatch
) => {
  const {
    page,
    sort,
    category,
    minprice,
    maxprice,
    withimages,
    search,
  } = filters;

  const query = `${process.env.REACT_APP_API_URL}/ads/?p=${page}&sort=${sort}&category=${category}&minprice=${minprice}&maxprice=${maxprice}&withimages=${withimages}&phrase=${search}`;

  dispatch({ type: DataActions.FetchRequest });

  try {
    const data: FetchAdsResponse = await fetch(query).then((res) => res.json());

    if (data.error) {
      return dispatch(handleError(data as ErrorResponse));
    }
    if (!data.ads && !data.pages) {
      return dispatch(handleUnknownError());
    }

    dispatch({
      type: DataActions.SetPages,
      payload: data.pages,
    });

    dispatch({
      type: DataActions.FetchAds,
      payload: data.ads,
    });
  } catch {
    return dispatch(handleUnknownError());
  }
};

export const fetchSingleAd = (id: string) => async (dispatch: Dispatch) => {
  const query = `${process.env.REACT_APP_API_URL}/ads/${id}`;

  dispatch({ type: DataActions.FetchRequest });

  try {
    const data: FetchSingleAdResponse = await fetch(query).then((res) =>
      res.json()
    );

    if ('error' in data) {
      return dispatch(handleError(data as ErrorResponse));
    }

    console.log(data);

    dispatch({
      type: DataActions.FetchSingleAd,
      payload: data,
    });
  } catch {
    return dispatch(handleUnknownError());
  }
};

export const clearCurrentAd = () => (dispatch: Dispatch) => {
  dispatch({
    type: DataActions.ClearCurrentAd,
  });
};

export const fetchUserAds = (favourites: 'favourites' | null = null) => async (
  dispatch: Dispatch
) => {
  const query = !!favourites
    ? `${process.env.REACT_APP_API_URL}/favourites`
    : `${process.env.REACT_APP_API_URL}/ads/user`;

  const errorOption: ErrorOption = !!favourites
    ? 'data-favourites'
    : 'data-user';

  const requestOptions: RequestInit = {
    credentials: 'include',
  };

  dispatch({ type: DataActions.FetchRequest });

  try {
    const data: FetchUserAdsResponse = await fetch(
      query,
      requestOptions
    ).then((res) => res.json());

    if ('message' in data) {
      return dispatch(handleError(data as ErrorResponse, errorOption));
    }

    if (!!favourites) {
      dispatch({
        type: DataActions.FetchFavourites,
        payload: data,
      });
    } else {
      dispatch({
        type: DataActions.FetchUserAds,
        payload: data,
      });
    }
  } catch {
    return dispatch(handleUnknownError(errorOption));
  }
};

export const patchFavourites = (
  id: string,
  action: 'add' | 'remove' = 'add'
) => async (dispatch: Dispatch) => {
  const query =
    action === 'remove'
      ? `${process.env.REACT_APP_API_URL}/favourites/remove/${id}`
      : `${process.env.REACT_APP_API_URL}/favourites/add/${id}`;

  const requestOptions: RequestInit = {
    method: 'PATCH',
    credentials: 'include',
  };

  dispatch({ type: DataActions.FetchRequest });

  try {
    const data: FetchUserAdsResponse = await fetch(
      query,
      requestOptions
    ).then((res) => res.json());

    if ('message' in data) {
      return dispatch(handleError(data as ErrorResponse, 'data-favourites'));
    }

    dispatch({
      type: DataActions.FetchFavourites,
      payload: data,
    });
  } catch {
    return dispatch(handleUnknownError('data-favourites'));
  }
};

export const postAd = (payload: FormData, func: () => void) => async (
  dispatch: Dispatch
) => {
  const query = `${process.env.REACT_APP_API_URL}/ads`;
  const requestOptions: RequestInit = {
    method: 'POST',
    credentials: 'include',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded', //testing for errors
      'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`,
    },
    body: payload,
  };

  dispatch({ type: DataActions.FetchRequest });

  try {
    const response: MainResponse = await fetch(
      query,
      requestOptions
    ).then((res) => res.json());

    if (response.status !== 'ok') {
      return dispatch(handleError(response as ErrorResponse, 'data'));
    }

    dispatch({ type: DataActions.PostSuccess });
    func();
  } catch {
    return dispatch(handleUnknownError('data'));
  }
};

export const setLastLocation = (pathname: string) => (dispatch: Dispatch) => {
  dispatch({
    type: DataActions.SetLastLocation,
    payload: pathname,
  });
};
