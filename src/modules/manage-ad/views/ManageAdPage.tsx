import { FC } from 'react';
import MotionOpacity from 'modules/common/components/MotionOpacity';
import ManageAdTemplate from '../templates/ManageAdTemplate';

const CreateAdPage: FC = () => {
  return (
    <MotionOpacity>
      <ManageAdTemplate />
    </MotionOpacity>
  );
};

export default CreateAdPage;
