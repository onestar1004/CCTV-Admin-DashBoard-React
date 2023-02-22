import { configureStore } from '@reduxjs/toolkit';

import dashboardReducer from 'redux/dashboard/dashboardSlice';

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
