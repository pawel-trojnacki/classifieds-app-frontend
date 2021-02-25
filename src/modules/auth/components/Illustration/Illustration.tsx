import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import IllustrationSvg from 'assets/svg/illustration.svg';
import IllustrationWithoutShadowsSvg from 'assets/svg/illustration-without-shadows.svg';
import { RootState } from 'store/root/store';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  illustration: {
    display: 'block',
    height: '40vw',
  },
});

const Illustration: FC = () => {
  const classes = useStyles();
  const dark = useSelector((state: RootState) => state.theme.dark);
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img
        className={classes.illustration}
        src={dark ? IllustrationWithoutShadowsSvg : IllustrationSvg}
        alt=""
      />
    </Box>
  );
};

export default Illustration;
