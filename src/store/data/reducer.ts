import { Reducer } from 'redux';
import { Ad, AdWithCreator } from 'types/ad.interface';
import { DataActions } from './data-actions.enum';

type StateError = null | string;

export interface DataState {
  isLoading: boolean;
  error: StateError;
  pages: number;
  ads: Ad[];
  currentAd: AdWithCreator | null;
  userAds: Ad[];
  userAdsError: StateError;
  favouriteAds: Ad[];
  favouriteAdsError: StateError;
  postError: StateError;
  deleteError: StateError;
  lastLocation: null | string;
}

const initialState: DataState = {
  isLoading: false,
  error: null,
  pages: 0,
  ads: [],
  currentAd: null,
  userAds: [],
  userAdsError: null,
  favouriteAds: [],
  favouriteAdsError: null,
  postError: null,
  deleteError: null,
  lastLocation: null,
};

export const dataReducer: Reducer<DataState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DataActions.FetchRequest:
      return {
        ...state,
        error: null,
        userAdsError: null,
        favouriteAdsError: null,
        postError: null,
        deleteError: null,
        isLoading: true,
      };
    case DataActions.FetchError:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case DataActions.SetPages:
      return {
        ...state,
        pages: payload,
      };
    case DataActions.FetchAds:
      return {
        ...state,
        isLoading: false,
        ads: payload,
      };
    case DataActions.FetchSingleAd:
      return {
        ...state,
        isLoading: false,
        currentAd: payload,
      };
    case DataActions.ClearCurrentAd:
      return {
        ...state,
        currentAd: null,
      };
    case DataActions.FetchUserAds:
      return {
        ...state,
        isLoading: false,
        userAds: payload,
      };
    case DataActions.FetchUserAdsError:
      return {
        ...state,
        isLoading: false,
        userAdsError: payload,
      };
    case DataActions.FetchFavourites:
      return {
        ...state,
        isLoading: false,
        favouriteAds: payload,
      };
    case DataActions.FetchFavouritesError:
      return {
        ...state,
        isLoading: false,
        favouriteAdsError: payload,
      };
    case DataActions.PostError:
      return {
        ...state,
        isLoading: false,
        postError: payload,
      };
    case DataActions.PostSuccess:
      return {
        ...state,
        isLoading: false,
      };
    case DataActions.DeleteError:
      return {
        ...state,
        isLoading: false,
        deleteError: payload,
      };
    case DataActions.DeleteSuccess:
      return {
        ...state,
        isLoading: false,
      };
    case DataActions.SetLastLocation:
      return {
        ...state,
        lastLocation: payload,
      };
    default:
      return state;
  }
};
