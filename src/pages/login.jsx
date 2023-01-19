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
import useInput from "../hooks/useInput";

//로그인 창
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  //로그인
  const { data, error } = useSelector((state) => state.loginSlice);
  const state = useSelector((state) => state);
  console.log("state", error);
  //회원가입, 비밀번호 변경
  const { isModalToggleSignup } = useSelector((state) => state.signup);
  const { isModalTogglePw } = useSelector((state) => state.forgotPw);
  //상태 메세지
  const [validMessageId, setValidMessageId] = useState("");
  const [validMessagePassword, setValidMessagePassword] = useState("");

  //useinput
  const [userId, onChangeInputUserId, setUserId] = useInput("");
  const [password, onChangeInputPassword, setPassword] = useInput("");

  const onClickOpenSignup = () => {
    dispatch(isModalGlobalToggleSignup(true));
  };
  const onClickOpenForgotPw = () => {
    dispatch(isModalGlobalTogglePw(true));
  };

  const [isId, setIsId] = useState(false);

  //userId 특수문자 제외
  const IsLoginId = (e) => {
    //유효성 검사 아이디
    const regexId = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;
    let { value } = e.target;
    if (!regexId.test(value)) {
      setIsId(false);
      console.log("setIsId : ", isId);
      return setValidMessageId("❗ 한글, 영어, 숫자 / 10자 이내로 입력");
    } else {
      setIsId(true);
      console.log("setIsId2 : ", isId);
      return setValidMessageId("");
    }
    // const curValue = e.currentTarget.value;
    // const notId = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;

    // // 정규식에 역슬래시 적용이 안됨
    // setuserId(curValue.replace(notId, ""));
  };
  //password 특수문자 제외

  const [isPassword, setIsPassword] = useState(false);

  const IsLoginPw = (e) => {
    //유효성 검사 비밀번호
    const regexPassword = /^[a-z|A-Z|0-9|]{4,30}$/;
    let { value } = e.target;
    if (!regexPassword.test(value)) {
      setIsPassword(false);
      console.log("setIsPassword : ", isPassword);
      return setValidMessagePassword("❗ 영어, 숫자 / 10자 이내로 입력");
    } else {
      setIsPassword(true);
      console.log("setIsPassword : ", isPassword);
      return setValidMessagePassword("");
    }
    //   const curValue = e.currentTarget.value;
    //   const notPw = /[~!@#$%";'^,&*\\()_+|</>=>`?:{[}]/g;
    //   setpassword(curValue.replace(notPw, ""));
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    //유효성 검사에 대한거
    if (isId === false && isPassword === false) return false;
    // 아이디랑 비밀번호 입력 후 서버검증
    if (!error) {
      const User = {
        id: Date.now(),
        userId,
        password,
      };
      //action의 반환값을 디스패치한다
      dispatch(__postUsers(User));
      //상태 값 ok라면
      console.log("err", error);
      //error가 null인건.. 당연한거 아냐??

      alert(`${userId}님 환영합니다.`);
      navigate("/posts");
    } else {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      console.log("err2", error);
      return false;
    }
    // console.log("user2=", user);
  };
  return (
    <>
      <StLogin>
        <StImg src="img/myGiraffe.png" alt="내기린_로고" />
        <StForm name="LoginPage" method="POST" onSubmit={onSubmitLogin}>
          <StIDPW>
            <StH>ID</StH>
            {validMessageId && <span> {validMessageId}</span>}
            <InputWithLabelDefault
              type="text"
              name="ID"
              maxlength="10"
              value={userId}
              validMessage={validMessageId}
              onChange={onChangeInputUserId}
              onBlur={IsLoginId}
            />
          </StIDPW>
          <StIDPW>
            <StH>PW</StH>
            {validMessagePassword && <span> {validMessagePassword}</span>}
            <InputWithLabelDefault
              type="password"
              name="password"
              maxlength="10"
              value={password}
              validMessage={validMessagePassword}
              onChange={onChangeInputPassword}
              onBlur={IsLoginPw}
            />
          </StIDPW>
          <StBtn>
            <button>Login</button>
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

const InputWithLabelDefault = styled.input`
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
