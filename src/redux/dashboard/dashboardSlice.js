import { createSlice } from '@reduxjs/toolkit';

import dashboardAPI from 'api/dashboard';

// export const getDutyForCleaning = (dispatch, getState) => {
// };

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dutyForCleaning: [],
    dutyForWater: [],
    err: '',
  },
  reducers: {
    getDutyForCleaning: (state, action) => {
      state.dutyForCleaning = action.payload;
    },
    getDutyForWater: (state, action) => {
      state.dutyForWater = action.payload;
    },
    getErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getDutyForCleaning, getDutyForWater, getErrors } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;

// Thunk function
export const fetchDutyForCleaning = () => (dispatch) => {
  dashboardAPI
    .getDutyForCleaning()
    .then((res) => {
      dispatch(getDutyForCleaning(res.data));
    })
    .catch((err) => {
      dispatch(getErrors(err));
    });
};

export const fetchDutyForWater = () => (dispatch) => {
  dashboardAPI
    .getDutyForWater()
    .then((res) => {
      dispatch(getDutyForWater(res.data));
    })
    .catch((err) => {
      dispatch(getErrors(err));
    });
};
