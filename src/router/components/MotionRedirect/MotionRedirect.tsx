import { motion } from 'framer-motion';
import { FC } from 'react';
import { Redirect, RedirectProps } from 'react-router-dom';

const MotionRedirect: FC<RedirectProps> = ({ ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

export default MotionRedirect;
