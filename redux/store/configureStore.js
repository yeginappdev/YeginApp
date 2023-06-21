import { configureStore } from '@reduxjs/toolkit';
import combineReducers from '../reducers/index'; 

const store = configureStore({
  reducer: combineReducers
});

export default store;
