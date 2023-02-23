import axios from 'axios';
import configData from '../config/config';


const getLogin = (values) => {
  return axios
    .post( configData.API_SERVER + 'users/login', {
        password: values.password,
        email: values.email
    })
};

const getRegister = (values) => {
  return axios
    .post( configData.API_SERVER + 'users/register', {
        username: values.username,
        password: values.password,
        email: values.email
    })
};

const auth = {
  getLogin,
  getRegister
}

export default auth;
