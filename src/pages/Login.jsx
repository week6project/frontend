import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SignupModal from "../components/SignupModal";
import ForgotPwModal from "../components/ForgotPwModal";
import { isModalGlobalToggleSignup } from "../redux/modules/signup";
import { isModalGlobalTogglePw } from "../redux/modules/forgotPw";
import ButtonDefault from "../components/ButtonDefault";
import { COLORS } from "../style/StyleGlobal";
import { __postUsers } from "../redux/modules/loginSlice";

//로그인 페이지
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  //로그인
  const data = useSelector((state) => state.loginSlice);
  console.log('로그인 loginData : ' , data)

  //회원가입, 비밀번호 변경
  const { isModalToggleSignup } = useSelector((state) => state.signup);
  const { isModalTogglePw } = useSelector((state) => state.forgotPw);

  const onClickOpenSignup = () => {
    dispatch(isModalGlobalToggleSignup(true));
  };
  const onClickOpenForgotPw = () => {
    dispatch(isModalGlobalTogglePw(true));
  };

  const [userId, setuserId] = useState("");

  //userId 특수문자 제외
  const IsLoginId = (e) => {
    const curValue = e.currentTarget.value;
    const notId = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;

    // 정규식에 역슬래시 적용이 안됨
    setuserId(curValue.replace(notId, ""));
  };
  //password 특수문자 제외
  const [password, setpassword] = useState("");

  const IsLoginPw = (e) => {
    const curValue = e.currentTarget.value;
    const notPw = /[~!@#$%";'^,&*\\()_+|</>=>`?:{[}]/g;
    setpassword(curValue.replace(notPw, ""));
  };

  //요청보낼때 헤더에 미들웨어 요청할때 넣어주기 로컬스토리지에 담아봐라~
  // headers["Authorization"] = `Bearer ${accessToken}`

  const onLoginHandler = (event) => {
    event.preventDefault();

    // .then((response) => {
    //   if (response.payload.loginSuccess) {
    //     alert(`${userId}님 환영합니다.`);
    //     navigate("/mainList");
    //     console.log("asdawd");
    //   } else {
    //     alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    //   }

    // db.
    // console.log("user=", user);
    if (userId === userId && password === password) {
        const User = {
          id: Date.now(),
          userId,
          password,
        };
        //action의 반환값을 디스패치한다
        dispatch(__postUsers(User));
        //상태 값 ok라면

        alert(`${userId}님 환영합니다.`);
        navigate("/posts");

    }else {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
    // console.log("user2=", user);
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
              autoFocus
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
          <ButtonDefault
            bgColor={COLORS.defaultLight}
            hoverBgColor={COLORS.defaultBold}
            hoverFontColor={COLORS.defaultWhite}
            onClick={onClickOpenSignup}
          >
            SignUp
          </ButtonDefault>
          <ButtonDefault
            bgColor={COLORS.defaultLight}
            hoverBgColor={COLORS.defaultBold}
            hoverFontColor={COLORS.defaultWhite}
            onClick={onClickOpenForgotPw}
          >
            Forgot Pw 변경
          </ButtonDefault>
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
