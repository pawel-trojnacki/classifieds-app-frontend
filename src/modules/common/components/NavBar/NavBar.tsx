import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppBar } from '@material-ui/core';
import Toolbar from './Toolbar';
import { useScroll } from 'hooks/useScroll';
import { mainTransition } from 'constants/animations';

export interface Props {
  isAuthenticated: boolean;
  type: 'main' | 'other';
}

const NavBar: FC<Props> = ({ isAuthenticated, type }) => {
  const { prevYPosition } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={mainTransition}
    >
      <AppBar elevation={prevYPosition > 0 ? 4 : 0}>
        <AnimatePresence>
          <Toolbar isAuthenticated={isAuthenticated} type={type} />
        </AnimatePresence>
      </AppBar>
    </motion.div>
  );
};

export default NavBar;
