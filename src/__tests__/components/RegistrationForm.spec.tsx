import { fireEvent, screen, waitFor } from '@testing-library/react';
import { server, rest } from 'test_utils/test-server';
import RegistrationForm from 'modules/auth/components/RegistrationForm';
import ComponentWithErrorAlert from 'test_utils/components/ComponentWithErrorAlert';
import { renderWithStore } from 'test_utils/render-with-store';

const labels = ['Username', 'Email', 'Phone number', 'Password'];
const conflicException = 409;
const errorMessage = 'User already exists';

beforeEach(() =>
  renderWithStore(
    <ComponentWithErrorAlert>
      <RegistrationForm />
    </ComponentWithErrorAlert>
  )
);

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

  it('should dispatch post function while input values are correct and not render error alert', async () => {
    const inputs = screen.getAllByDisplayValue('');
    const submitButton = screen.getByTestId('loading-button');

    const [usernameInput, emailInput, phoneInput, passwordInput] = inputs;
    fireEvent.change(usernameInput, {
      target: { value: 'John Doe' },
    });

    fireEvent.change(emailInput, {
      target: { value: 'valid@email.com' },
    });

    fireEvent.change(phoneInput, {
      target: { value: '+48123456789' },
    });

    fireEvent.change(passwordInput, {
      target: { value: '000000' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId('error-alert')).toBeNull();
    });
  });

  it('should handles failure and render error alert', async () => {
    server.use(
      rest.post(`${process.env.REACT_APP_API_URL}/users`, (req, res, ctx) => {
        return res.once(
          ctx.status(conflicException),
          ctx.json({
            status: 'error',
            error: errorMessage,
            message: errorMessage,
          })
        );
      })
    );

    const inputs = screen.getAllByDisplayValue('');
    const submitButton = screen.getByTestId('loading-button');

    const [usernameInput, emailInput, phoneInput, passwordInput] = inputs;
    fireEvent.change(usernameInput, {
      target: { value: 'John Doe' },
    });

    fireEvent.change(emailInput, {
      target: { value: 'valid@email.com' },
    });

    fireEvent.change(phoneInput, {
      target: { value: '+48123456789' },
    });

    fireEvent.change(passwordInput, {
      target: { value: '000000' },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
      expect(screen.getByText(/User already exists/i)).toBeInTheDocument();
    });
  });
});
