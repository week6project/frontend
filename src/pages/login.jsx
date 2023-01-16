import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignupModal from "../components/SignupModal";
import ForgotPwModal from "../components/ForgotPwModal";
import { isModalGlobalToggleSignup } from "../redux/modules/signup";
import { isModalGlobalTogglePw } from "../redux/modules/forgotPw";

function Login() {
  const dispatch = useDispatch();

  const { isModalToggleSignup } = useSelector((state) => state.signup);
  const { isModalTogglePw } = useSelector((state) => state.forgotPw);

  const onClickOpenSignup = () => {
    dispatch(isModalGlobalToggleSignup(true));
    console.log("로그인 클릭 isModalOpen : ", isModalToggleSignup);
  };
  const onClickOpenForgotPw = () => {
    dispatch(isModalGlobalTogglePw(true));
    console.log("비밀번호변경 isModalOpen : ", isModalTogglePw);
  };

  return (
    <>
      <button onClick={onClickOpenSignup}>회원가입</button>
      <button onClick={onClickOpenForgotPw}>비밀번호 변경</button>
      <SignupModal></SignupModal>
      <ForgotPwModal></ForgotPwModal>
    </>
  );
}

export default Login;
