import { FC } from 'react';

import MotionOpacity from 'modules/common/components/MotionOpacity';
import HomeTemplate from '../templates/HomeTemplate';

const HomePage: FC = () => {
  return (
    <MotionOpacity>
      <HomeTemplate />
    </MotionOpacity>
  );
};

export default HomePage;
