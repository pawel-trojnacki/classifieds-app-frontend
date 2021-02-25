import { FC } from 'react';
import { Box, Grid, Hidden } from '@material-ui/core';
import FormWrapper from '../../components/FormWrapper';
import Illustration from 'modules/auth/components/Illustration';

const AuthTemplate: FC = () => {
  return (
    <Box maxWidth="1440px" margin="0 auto">
      <Grid container>
        <Hidden smDown>
          <Grid item md={7}>
            <Illustration />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5}>
          <FormWrapper />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthTemplate;
