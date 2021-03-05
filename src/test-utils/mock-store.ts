import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'store/root/store';

export const mockStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
