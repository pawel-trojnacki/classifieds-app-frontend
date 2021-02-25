import { Dispatch } from 'redux';
import { FiltersType } from './reducer';
import { FiltersActions } from './filters-actions.enum';

interface SetFilterPayload {
  filter: FiltersType;
  value: string | number | boolean;
}

interface SetFilterDispatch {
  type: FiltersActions.SetFilter;
  payload: SetFilterPayload;
}

interface ClearFiltersDispatch {
  type: FiltersActions.ClearFilters;
}

export const setFilter = (payload: SetFilterPayload) => (
  dispatch: Dispatch<SetFilterDispatch>
) => {
  dispatch({
    type: FiltersActions.SetFilter,
    payload,
  });
};

export const clearFilters = () => (
  dispatch: Dispatch<ClearFiltersDispatch>
) => {
  dispatch({
    type: FiltersActions.ClearFilters,
  });
};
