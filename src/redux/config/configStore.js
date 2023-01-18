// src/redux/config/configStore.js

import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";

import signup from "../modules/signup";
import forgotPw from "../modules/forgotPw";
import postsSlice from "../modules/postsSlice";
import postDetailSlice from "../modules/postDetailSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: { signup, forgotPw, postsSlice, postDetailSlice, loginSlice },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
