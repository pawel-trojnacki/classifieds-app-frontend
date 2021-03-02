import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ErrorAlert from 'modules/common/components/ErrorAlert';
import store from 'store/root';

const mockStore = configureStore();

const AUTH_ERROR = 'Not authenticated';
const DATA_ERROR = 'Some data error';
const DATA_POST_ERROR = 'Some data post error';

const storeWithAuthError = {
  auth: { error: AUTH_ERROR },
  data: { error: null, postError: null },
};
const storeWithDataError = {
  auth: { error: null },
  data: { error: DATA_ERROR, postError: null },
};

const storeWithDataPostError = {
  auth: { error: null },
  data: { error: null, postError: DATA_POST_ERROR },
};

describe('ErrorAlert', () => {
  it('should be null, when error does not exist', () => {
    const { container } = render(
      <Provider store={store}>
        <ErrorAlert />
      </Provider>
    );
    expect(container).toBeEmptyDOMElement();
    expect(container.firstChild).toBeNull();
  });

  it('should display authentication error', () => {
    const { getByText } = render(
      <Provider store={mockStore(storeWithAuthError)}>
        <ErrorAlert />
      </Provider>
    );
    expect(getByText(AUTH_ERROR)).toBeInTheDocument();
  });

  it('should display data error', () => {
    const { getByText } = render(
      <Provider store={mockStore(storeWithDataError)}>
        <ErrorAlert dataContext />
      </Provider>
    );
    expect(getByText(DATA_ERROR)).toBeInTheDocument();
  });

  it('should display data post error', () => {
    const { getByText } = render(
      <Provider store={mockStore(storeWithDataPostError)}>
        <ErrorAlert dataPostContext />
      </Provider>
    );
    expect(getByText(DATA_POST_ERROR)).toBeInTheDocument();
  });
});
