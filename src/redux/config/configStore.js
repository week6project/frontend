// src/redux/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import signup from '../modules/signup'
import forgotPw from '../modules/forgotPw';
import postsSlice from '../modules/postsSlice';


const store = configureStore({
  reducer: { signup, forgotPw, postsSlice },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;