import { FC } from 'react';
import AdTemplate from '../templates/AdTemplate';
import MotionOpacity from 'modules/common/components/MotionOpacity';

const AdPage: FC = () => {
  return (
    <MotionOpacity>
      <AdTemplate />
    </MotionOpacity>
  );
};

export default AdPage;
