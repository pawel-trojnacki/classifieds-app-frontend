import React, { FC } from 'react';
import MotionOpacity from 'modules/common/components/MotionOpacity';
import UserTemplate from '../templates/UserTemplate';

const UserAdsPage: FC = () => {
  return (
    <MotionOpacity>
      <UserTemplate />
    </MotionOpacity>
  );
};

export default UserAdsPage;
