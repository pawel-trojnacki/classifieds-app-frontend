import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoadingButton from 'modules/common/components/LoadingButton';

const BUTTON_CONTENT = 'Click me';

const mockStore = configureStore();

const storeWithoutLoading = mockStore({
  auth: { isLoading: false },
  data: { isLoading: false },
});

const storeWithLoadingAuth = mockStore({
  auth: { isLoading: true },
  data: { isLoading: false },
});

const storeWithLoadingData = mockStore({
  auth: { isLoading: false },
  data: { isLoading: true },
});

describe('LoadingButton', () => {
  it('should render button with content', () => {
    const { getByText } = render(
      <Provider store={storeWithoutLoading}>
        <LoadingButton content={BUTTON_CONTENT} />
      </Provider>
    );

    expect(getByText(BUTTON_CONTENT)).toBeInTheDocument();
  });

  it('should return circular progress while auth isLoading is true', () => {
    const { getByTestId, queryByText } = render(
      <Provider store={storeWithLoadingAuth}>
        <LoadingButton content={BUTTON_CONTENT} />
      </Provider>
    );

    expect(getByTestId('circular-progress')).toBeInTheDocument();
    expect(queryByText(BUTTON_CONTENT)).toBeNull();
  });

  it('should return circular progress while data isLoading is true', () => {
    const { getByTestId, queryByText } = render(
      <Provider store={storeWithLoadingData}>
        <LoadingButton content={BUTTON_CONTENT} dataContext />
      </Provider>
    );
    expect(getByTestId('circular-progress')).toBeInTheDocument();
    expect(queryByText(BUTTON_CONTENT)).toBeNull();
  });
});
