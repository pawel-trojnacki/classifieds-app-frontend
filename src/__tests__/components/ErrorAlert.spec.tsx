import configureStore from 'redux-mock-store';
import ErrorAlert from 'modules/common/components/ErrorAlert';
import { renderWithStore } from 'test_utils/render-with-store';

const mockStore = configureStore();

const authError = 'Not authenticated';
const dataError = 'Some data error';
const dataPostError = 'Some data post error';

const storeWithoutError = mockStore({
  auth: { error: null },
  data: { error: null, postError: null },
});

const storeWithDataError = mockStore({
  auth: { error: null },
  data: { error: dataError, postError: null },
});

const storeWithAuthError = mockStore({
  auth: { error: authError },
  data: { error: null, postError: null },
});

const storeWithDataPostError = mockStore({
  auth: { error: null },
  data: { error: null, postError: dataPostError },
});

describe('ErrorAlert', () => {
  it('should be null, when error does not exist', () => {
    const { container } = renderWithStore(<ErrorAlert />, storeWithoutError);
    expect(container).toBeEmptyDOMElement();
    expect(container.firstChild).toBeNull();
  });

  it('should display authentication error', () => {
    const { getByText } = renderWithStore(<ErrorAlert />, storeWithAuthError);
    expect(getByText(authError)).toBeInTheDocument();
  });

  it('should display data error', () => {
    const { getByText } = renderWithStore(
      <ErrorAlert dataContext />,
      storeWithDataError
    );
    expect(getByText(dataError)).toBeInTheDocument();
  });

  it('should display data post error', () => {
    const { getByText } = renderWithStore(
      <ErrorAlert dataPostContext />,
      storeWithDataPostError
    );
    expect(getByText(dataPostError)).toBeInTheDocument();
  });
});
