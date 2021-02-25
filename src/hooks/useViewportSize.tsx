import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

export const useViewportSize = () => {
  const theme = useTheme();
  const isSmWidth = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdWidth = useMediaQuery(theme.breakpoints.up('md'));
  const isLgWidth = useMediaQuery(theme.breakpoints.up('lg'));

  return { isSmWidth, isMdWidth, isLgWidth } as const;
};
