import { Theme } from '@material-ui/core';
import { RecursivePartial } from 'types/recursive-partial';

export const common: RecursivePartial<Theme> = {
  typography: {
    fontFamily: "'Montserrat', 'sans-serif'",
    h1: {
      fontSize: '2.4rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    h6: {
      lineHeight: 1.4,
    },
  },
};
