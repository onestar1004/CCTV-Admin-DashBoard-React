import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Divider,
  Stack,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import Logo from './../../../components/Logo';
import AuthCardWrapper from '../AuthCardWrapper';
import RestLogin from './Login';

//================================|| LOGIN MAIN ||================================//

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AuthWrapper1>
      <Grid
        container
        direction='column'
        justifyContent='flex-end'
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{ minHeight: 'calc(100vh - 68px)' }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Grid item sx={{ mb: 3 }}>
                    <RouterLink to='#'>
                      <Logo />
                    </RouterLink>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? 'column-reverse' : 'row'}
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Grid item>
                        <Stack
                          alignItems='center'
                          justifyContent='center'
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? 'h3' : 'h2'}
                          >
                            SIGN IN
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <RestLogin />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      item
                      container
                      direction='column'
                      alignItems='center'
                      xs={12}
                    >
                      <Typography
                        variant='subtitle1'
                        component={RouterLink}
                        to='/register'
                        sx={{ textDecoration: 'none' }}
                        color='secondary'
                      >
                        Sign Up
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          {/* <AuthFooter /> */}
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Login;
