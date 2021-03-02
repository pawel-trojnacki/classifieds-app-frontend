import { fireEvent, render, waitFor } from '@testing-library/react';
import LogoutSnackbarExample from 'test_utils/components/LogoutSnackbarExample';

describe('LogoutSnackbar', () => {
  it('should not render the snackbar when is authenticated', () => {
    const { queryByTestId } = render(<LogoutSnackbarExample authenticated />);

    expect(queryByTestId('snackbar')).toBeNull();
  });

  it('should not render the snackbar initially when is not authenticated', () => {
    const { queryByTestId } = render(<LogoutSnackbarExample />);

    expect(queryByTestId('snackbar')).toBeNull();
  });

  it('should render snackbar after isAuthenticated change from true to false', async () => {
    const { getByTestId } = render(<LogoutSnackbarExample authenticated />);

    const button = getByTestId('button');
    fireEvent.click(button);

    const snackbar = await waitFor(() => getByTestId('snackbar'));

    expect(snackbar).toBeInTheDocument();
  });
});
