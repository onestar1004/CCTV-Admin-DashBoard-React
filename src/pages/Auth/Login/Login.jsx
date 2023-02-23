import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@mui/styles';

import {
  Stack,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
// import useScriptRef from '../../../../hooks/useScriptRef';
import AnimateButton from '../../../components/Base/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { fetchLogin } from 'redux/auth/authSlice';

// style constant
const useStyles = makeStyles((theme) => ({
  redButton: {
    fontSize: '1rem',
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: '1px solid',
    borderColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
  signDivider: {
    flexGrow: 1,
  },

  signText: {
    cursor: 'unset',
    margin: theme.spacing(2),
    padding: '5px 56px',
    borderColor: theme.palette.grey[100] + ' !important',
    color: theme.palette.grey[900] + '!important',
    fontWeight: 500,
  },
  loginIcon: {
    marginRight: '16px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '8px',
    },
  },
  loginInput: {
    ...theme.typography.customInput,
    marginTop: '15px',
  },
}));

//============================|| API JWT - LOGIN ||============================//

const RestLogin = (props, { ...others }) => {
  const classes = useStyles();
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  // const scriptedRef = useScriptRef();
  const [checked, setChecked] = React.useState(true);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            dispatcher(fetchLogin(values, navigate));

            if (!auth.login?.isLoggedIn) {
              setStatus({ success: false });
              setErrors({ submit: auth.login.msg });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            // if (scriptedRef.current) {
            //     setStatus({ success: false });
            //     setErrors({ submit: err.message });
            //     setSubmitting(false);
            // }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor='outlined-adornment-email-login'>
                Email
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-email-login'
                type='email'
                value={values.email}
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                label='Email Address'
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id='standard-weight-helper-text-email-login'
                >
                  {' '}
                  {errors.email}{' '}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor='outlined-adornment-password-login'>
                Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password-login'
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name='password'
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password'
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id='standard-weight-helper-text-password-login'
                >
                  {' '}
                  {errors.password}{' '}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name='checked'
                    color='primary'
                  />
                }
                label='Remember me'
              />
            </Stack>
            {errors.submit && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box
              sx={{
                mt: 2,
              }}
            >
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  color='secondary'
                >
                  Sign IN
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RestLogin;
