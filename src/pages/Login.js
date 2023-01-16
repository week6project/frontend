import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignupModal from "../components/SignupModal";
import ForgotPwModal from "../components/ForgotPwModal";
import { isModalGlobalToggleSignup } from "../redux/modules/signup";
import { isModalGlobalTogglePw } from "../redux/modules/forgotPw";

//로그인 창
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //회원가입, 비밀번호 변경
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

  const [userId, setuserId] = useState("");

  const IsLoginId = (e) => {
    const curValue = e.currentTarget.value;
    const notId = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;
    // 정규식에 역슬래시 적용이 안됨
    setuserId(curValue.replace(notId, ""));
  };
  const [password, setpassword] = useState("");

  const IsLoginPw = (e) => {
    const curValue = e.currentTarget.value;
    const notPw = /[~!@#$%";'^,&*\\()_+|</>=>`?:{[}]/g;

    setpassword(curValue.replace(notPw, ""));
  };
  const onLoginHandler = (user) => {
    const newUser = {
      //id: Date.now(),
      userId,
      password,
    };
    // dispatch(__postUsers(newUser));

    console.log(user.name);

    alert("환영합니다.");
    navigate("/mainList");
  };
  return (
    <>
      <StLogin>
        <StForm name="LoginPage" method="POST">
          <StImg src="img/myGiraffe.png" alt="내기린_로고" />

          <StIDPW>
            <StH>ID</StH>
            <StInput
              type="text"
              name="ID"
              maxlength="10"
              value={userId}
              onChange={IsLoginId}
            />
          </StIDPW>
          <StIDPW>
            <StH>PW</StH>
            <StInput
              type="password"
              name="password"
              maxlength="10"
              value={password}
              onChange={IsLoginPw}
            />
          </StIDPW>
          <StBtn>
            <button onClick={onLoginHandler}>Login</button>
          </StBtn>
        </StForm>
        <button>Social Login</button>
        <StBtnRow>
          <button onClick={onClickOpenSignup}>SignUp</button>
          <button onClick={onClickOpenForgotPw}>Forgot Pw 변경</button>
        </StBtnRow>
      </StLogin>

      <SignupModal></SignupModal>
      <ForgotPwModal></ForgotPwModal>
    </>
  );
};

export default Login;

const StLogin = styled.div`
  max-width: 1920px;
  min-width: 800px;
  max-height: 1080px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StForm = styled.form`
  width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StImg = styled.img`
  width: 300px;
  margin-bottom: 80px;
`;

const StIDPW = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
`;
const StH = styled.h4`
  width: 40px;

  margin: 0px 10px 0px 0px;
  position: relative;
  top: 9px;
`;

const StInput = styled.input`
  width: 150px;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
`;

const StBtn = styled.div`
  box-sizing: content-box;
  margin-top: 20px;
  width: 208px;

  display: flex;
  flex-direction: column;
`;

const StBtnRow = styled.div`
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px 10px 0px;
`;
const Stbutton = styled.button`
  margin-bottom: 20px;
`;
// const Stt = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
