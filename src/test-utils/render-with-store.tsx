import { ReactElement } from 'react';
import { AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { mockStore } from 'test_utils/mock-store';

export const renderWithStore = (
  children: ReactElement,
  providedStore: Store<any, AnyAction> = mockStore()
) => {
  return render(<Provider store={providedStore}>{children}</Provider>);
};
