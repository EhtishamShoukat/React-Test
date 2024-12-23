import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,  
  },
});

export default store;