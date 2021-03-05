import configureStore from 'redux-mock-store';
import LoadingButton from 'modules/common/components/LoadingButton';
import { renderWithStore } from 'test_utils/render-with-store';

const buttonContent = 'Click me';

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
    const { getByText } = renderWithStore(
      <LoadingButton content={buttonContent} />,
      storeWithoutLoading
    );

    expect(getByText(buttonContent)).toBeInTheDocument();
  });

  it('should return circular progress while auth isLoading is true', () => {
    const { getByTestId, queryByText } = renderWithStore(
      <LoadingButton content={buttonContent} />,
      storeWithLoadingAuth
    );

    expect(getByTestId('circular-progress')).toBeInTheDocument();
    expect(queryByText(buttonContent)).toBeNull();
  });

  it('should return circular progress while data isLoading is true', () => {
    const { getByTestId, queryByText } = renderWithStore(
      <LoadingButton content={buttonContent} dataContext />,
      storeWithLoadingData
    );

    expect(getByTestId('circular-progress')).toBeInTheDocument();
    expect(queryByText(buttonContent)).toBeNull();
  });
});
