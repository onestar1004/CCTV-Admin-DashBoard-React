import { createSlice } from "@reduxjs/toolkit";

import authAPI from "api/auth";

// export const getLogin = (dispatch, getState) => {
// };

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {},
    register: [],
    err: "",
  },
  reducers: {
    getLogin: (state, action) => {
      state.login = action.payload;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    getRegister: (state, action) => {
      state.register = action.payload;
    },
    getErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLogin, getRegister, getErrors } = authSlice.actions;

export default authSlice.reducer;

// Thunk function
export const fetchLogin = (values, navigate) => (dispatch) => {
  authAPI
    .getLogin(values)
    .then((response) => {
      if (response.data.success) {
        dispatch(getLogin({
            isLoggedIn: true,
            user: response.data.user,
            token: response.data.token,
          }
        ))
        localStorage.setItem("token", response.data.token);
        navigate('/');
      } else {
        dispatch(getLogin(
          { isLoggedIn: false, msg: response.data.msg }
        ));
      }
    })
    .catch((error) => {
      dispatch(getErrors(
        { isLoggedIn: false, msg: error.response.data.msg }
      ));
    });
};

export const fetchRegister = (values, navigate) => (dispatch) => {
  authAPI
    .getRegister(values)
    .then((response) => {
      if (response.data.success) {
        navigate('/login');
        dispatch(getRegister(
          { success: true, msg: response.data.msg }
        ));
      } else {
        dispatch(getRegister(
          { success: false, msg: response.data.msg }
        ));
      }
    })
    .catch((error) => {
      dispatch(getRegister(
        { success: false, msg: error.response.data.msg }
      ));
    });
};
