import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { dataReducer, DataState } from '../data/reducer';
import { filtersReducer, FiltersState } from '../filters/reducer';
import { themeReducer, ThemeState } from '../theme/reducer';
import { authReducer, AuthState } from '../auth/reducer';

export interface RootState {
  theme: ThemeState;
  filters: FiltersState;
  data: DataState;
  auth: AuthState;
}

export const rootReducer = combineReducers({
  theme: themeReducer,
  filters: filtersReducer,
  data: dataReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
