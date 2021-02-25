import { Reducer } from 'redux';
import { allowedPrice } from 'constants/allowed-price';
import { Sort } from 'types/sort.enum';
import { FiltersActions } from './filters-actions.enum';

export enum FiltersType {
  Page = 'page',
  Sort = 'sort',
  Category = 'category',
  MinPrice = 'minprice',
  MaxPrice = 'maxprice',
  WithImages = 'withimages',
  Search = 'search',
}

export interface FiltersState {
  page: number;
  sort: string;
  category: string;
  minprice: number;
  maxprice: number;
  withimages: boolean;
  search: string;
}

const initialState: FiltersState = {
  page: 1,
  sort: Sort.Newest,
  category: 'all',
  minprice: allowedPrice.min,
  maxprice: allowedPrice.max,
  withimages: false,
  search: '',
};

export const filtersReducer: Reducer<FiltersState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FiltersActions.SetFilter:
      return {
        ...state,
        [payload.filter]: payload.value,
      };
    case FiltersActions.ClearFilters:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
