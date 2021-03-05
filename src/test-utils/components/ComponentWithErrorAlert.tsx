import { FC } from 'react';
import ErrorAlert from 'modules/common/components/ErrorAlert';

const ComponentWithErrorAlert: FC = ({ children }) => {
  return (
    <div>
      {children}
      <ErrorAlert />
    </div>
  );
};

export default ComponentWithErrorAlert;
