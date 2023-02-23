import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { makeStyles } from '@mui/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from './../../../components/Base/AnimateButton';
import {
  strengthColor,
  strengthIndicator,
} from '../../../utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { fetchRegister } from 'redux/auth/authSlice';

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

//===========================|| API JWT - REGISTER ||===========================//

const RestRegister = ({ ...others }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [showPassword, setShowPassword] = React.useState(false);
  //   const [checked, setChecked] = React.useState(true);
  const auth = useSelector((state) => state.auth);
  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState('');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('123456');
  }, []);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          username: Yup.string()
            .min(4)
            .max(15)
            .required('Username is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            dispatcher(fetchRegister(values, navigate));
            if (!auth.register.success) {
              setStatus({ success: false });
              setErrors({ submit: auth.register.msg });
              setSubmitting(false);
            }

          } catch (err) {
            console.log(err, "ddd");
            // setStatus({ success: false });
            // setErrors({ submit: err.message });
            // setSubmitting(false);
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
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Username'
                  margin='normal'
                  name='username'
                  id='username'
                  type='text'
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={classes.loginInput}
                  error={touched.username && Boolean(errors.username)}
                />
                {touched.username && errors.username && (
                  <FormHelperText
                    error
                    id='standard-weight-helper-text--register'
                  >
                    {errors.username}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor='outlined-adornment-email-register'>
                Email
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-email-register'
                type='email'
                value={values.email}
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id='standard-weight-helper-text--register'
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
              <InputLabel htmlFor='outlined-adornment-password-register'>
                Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password-register'
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name='password'
                label='Password'
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
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
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id='standard-weight-helper-text-password-register'
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <Grid container spacing={2} alignItems='center'>
                    <Grid item>
                      <Box
                        backgroundColor={level.color}
                        sx={{
                          width: 85,
                          height: 8,
                          borderRadius: '7px',
                        }}
                      ></Box>
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1' fontSize='0.75rem'>
                        {level.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

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
                  Sign UP
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default RestRegister;
