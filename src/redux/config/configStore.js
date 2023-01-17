// src/redux/config/configStore.js

import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import forgotPw from "../modules/forgotPw";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: { signup, forgotPw, loginSlice },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
