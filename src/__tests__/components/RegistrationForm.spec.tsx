import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStoreWithThunk } from 'test_utils/mockStoreWithThunk';
import RegistrationForm from 'modules/auth/components/RegistrationForm';

const store = mockStoreWithThunk({
  auth: {
    isLoading: false,
  },
  data: {
    isLoading: false,
  },
});

const labels = ['Username', 'Email', 'Phone number', 'Password'];

beforeEach(() => {
  render(
    <Provider store={store}>
      <RegistrationForm />
    </Provider>
  );
});

describe('RegistrationForm', () => {
  it('should render component propperly', async () => {
    labels.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('should render errors after submiting if inputs are empty', async () => {
    const submitButton = screen.getByTestId('loading-button');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/username is required/)).toBeInTheDocument();
      expect(screen.getByText(/email is required/)).toBeInTheDocument();
      expect(
        screen.getByText(/must be a valid phone number/)
      ).toBeInTheDocument();
      expect(screen.getByText(/password is required/)).toBeInTheDocument();
    });
  });

  it('should render errors after submiting if input values are incorrect', async () => {
    const inputs = screen.getAllByDisplayValue('');
    const submitButton = screen.getByTestId('loading-button');

    const [usernameInput, emailInput, phoneInput, passwordInput] = inputs;

    fireEvent.change(usernameInput, {
      target: { value: 'a' },
    });

    fireEvent.change(emailInput, {
      target: { value: 'email@email' },
    });

    fireEvent.change(phoneInput, {
      target: { value: '123456' },
    });

    fireEvent.change(passwordInput, {
      target: { value: 'short' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/username is too short/i)).toBeInTheDocument();
      expect(
        screen.getByText(/must be a valid email address/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/must be a valid phone number/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/password has to be at least 6 characters long/i)
      ).toBeInTheDocument();
    });
  });

  it('should render error message after blur', async () => {
    const [usernameInput] = screen.getAllByDisplayValue('');

    expect(screen.queryByText(/username is required/i)).toBeNull();

    fireEvent.blur(usernameInput);

    await waitFor(() => {
      expect(screen.queryByText(/username is required/i)).toBeInTheDocument();
    });
  });
});
