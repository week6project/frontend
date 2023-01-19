// src/redux/config/configStore.js

import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";

import signup from "../modules/signup";
import forgotPw from "../modules/forgotPw";
import postsSlice from "../modules/postsSlice";
import postDetailSlice from "../modules/postDetailSlice";
import loginSlice from "../modules/loginSlice";
import postSlice from "../modules/postSlice";

const store = configureStore({
  reducer: {
    signup,
    forgotPw,
    postsSlice,
    postDetailSlice,
    loginSlice,
    postSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
