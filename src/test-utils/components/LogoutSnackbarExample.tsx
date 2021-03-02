import { FC, useState } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LogoutSnackbar from 'modules/common/components/LogoutSnackbar';

interface Props {
  authenticated?: boolean;
}

const mockStore = configureStore();

const LogoutSnackbarExample: FC<Props> = ({ authenticated }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(authenticated)
  );

  const handleLogoutButtonClick = () => {
    setIsAuthenticated((prevState) => !prevState);
  };
  return (
    <div>
      <Provider store={mockStore({ auth: { isAuthenticated } })}>
        <button onClick={handleLogoutButtonClick} data-testid="button">
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        <LogoutSnackbar />
      </Provider>
    </div>
  );
};

export default LogoutSnackbarExample;
