import { FC } from 'react';
import { Box, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useViewportSize } from 'hooks/useViewportSize';

interface Props {
  fixed?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootBackground: {
      backgroundColor: theme.palette.background.default,
    },
    rootShadow: {
      boxShadow: '0px 0px 12px -6px rgba(0,0,0,0.6)',
    },
  })
);

const CardWrapper: FC<Props> = ({ children, fixed }) => {
  const classes = useStyles();
  const { isMdWidth } = useViewportSize();
  return (
    <Paper
      className={isMdWidth ? classes.rootShadow : classes.rootBackground}
      elevation={0}
    >
      <Box
        paddingX={{ xs: 3, md: 5, lg: 7 }}
        paddingY={{ xs: 3, md: 8, lg: 10 }}
        height={{ md: fixed ? '500px' : 'auto' }}
      >
        {children}
      </Box>
    </Paper>
  );
};

export default CardWrapper;
