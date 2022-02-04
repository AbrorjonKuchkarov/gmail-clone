import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/counter/mailSlice';
import userReducer from '../features/counter/mailSlice'

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
