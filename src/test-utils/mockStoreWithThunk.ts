import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];

export const mockStoreWithThunk = configureStore(middlewares);
