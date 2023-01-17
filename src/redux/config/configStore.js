// src/redux/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import signup from '../modules/signup'
import forgotPw from '../modules/forgotPw';
import postsSlice from '../modules/postsSlice';
import postDetailSlice from '../modules/postDetailSlice';


const store = configureStore({
  reducer: { signup, forgotPw, postsSlice, postDetailSlice },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;