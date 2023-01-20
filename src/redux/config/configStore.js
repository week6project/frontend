// src/redux/config/configStore.js

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import signup from "../modules/signup";
import forgotPw from "../modules/forgotPw";
import postsSlice from "../modules/postsSlice";
import postDetailSlice from "../modules/postDetailSlice";
import loginSlice from "../modules/loginSlice";
import postSlice from "../modules/postSlice";
import post2Slice from "../modules/post2Slice";
import addAnswerSlice from "../modules/addAnswerSlice";

const store = configureStore({
  reducer: {
    signup,
    forgotPw,
    postsSlice,
    postDetailSlice,
    loginSlice,
    postSlice,
    post2Slice,
    addAnswerSlice, //정답 제출 모듈
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
