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
import GoogleLoginBtn from "../components/GoogleLoginBtn";

//로그인 페이지
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state);

  //로그인
  
  const { data, error, isLoginOk } = useSelector((state) => state.loginSlice);
  const state = useSelector((state) => state.loginSlice);

  const { data, error } = useSelector((state) => state.loginSlice);
  const state = useSelector((state) => state);
  //console.log("state", error);
  const [loginState, setLoginState]=useState(false)


  //회원가입, 비밀번호 변경
  const { isModalToggleSignup } = useSelector((state) => state.signup);
  const { isModalTogglePw } = useSelector((state) => state.forgotPw);
  //상태 메세지
  const [validMessageId, setValidMessageId] = useState("");
  const [validMessagePassword, setValidMessagePassword] = useState("");

  //useinput
  const [userId, onChangeInputUserId, setUserId] = useInput("");
  const [password, onChangeInputPassword, setPassword] = useInput("");

  //로그인 값
  const [isLoginState, setIsLoginState]=useState(false)

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
      return setValidMessagePassword(
        "❗ 영어, 숫자 / 4자이상 30자 이내로 입력",
      );
    } else {
      setIsPassword(true);
      return setValidMessagePassword("");
    }
    //   const curValue = e.currentTarget.value;
    //   const notPw = /[~!@#$%";'^,&*\\()_+|</>=>`?:{[}]/g;
    //   setpassword(curValue.replace(notPw, ""));
  };

   const onSubmitLogin = async (event) =>  {
    event.preventDefault();
    //유효성 검사
    if (isId === false && isPassword === false) return false;
      const User = {
        id: Date.now(),
        userId,
        password,
      };
      console.log('로그인 디스패치 시작')
      dispatch(__postUsers(User));
  };

  //구글 로그인
  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  //로그인 상태 OK일 경우 글 목록 페이지로 이동
  useEffect(()=>{
    if(state.users.status===200){
      navigate('/posts')
    }
  },[state])
  
  console.log("로그인 최종 state : ", state);
  console.log("로그인 최종 isLoginOk : ", isLoginOk);
  

  return (
    <>
      <StLogin>
        <StImg src="img/myGiraffe.png" alt="내기린_로고" />
        <StForm name="LoginPage" method="POST" onSubmit={onSubmitLogin}>
          <StIDPW>
            <StH>ID</StH>
            <StRow>
              {/* 태그 감싸서 블록처리하면됨 */}
              {validMessageId && <StSpan> {validMessageId}</StSpan>}
              <InputWithLabelDefault
                type="text"
                name="ID"
                width="90%"
                maxlength="10"
                value={userId}
                validMessage={validMessageId}
                onChange={onChangeInputUserId}
                onBlur={IsLoginId}
              />
            </StRow>
          </StIDPW>
          <StIDPW>
            <StH2>PW</StH2>
            <StRow>
              {validMessagePassword && (
                <StSpan2> {validMessagePassword}</StSpan2>
              )}
              <InputWithLabelDefault
                type="password"
                name="password"
                maxlength="30"
                value={password}
                validMessage={validMessagePassword}
                onChange={onChangeInputPassword}
                onBlur={IsLoginPw}
              />
            </StRow>
          </StIDPW>
          <StBtn>
            <ButtonDefault
              bgColor={COLORS.defaultBlueLight}
              hoverBgColor={COLORS.defaultBlueBold}
              hoverFontColor={COLORS.defaultWhite}
            >
              Login
            </ButtonDefault>
          </StBtn>
        </StForm>
        {/* 구글 */}
        <div className="g-signin2" data-onsuccess="onSignIn"></div>

        <GoogleLoginBtn />
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
  width: 320px;
  height: 60px;
`;
const StSpan = styled.span`
  position: absolute;
  left: 500px;
  top: 368px;
`;
const StSpan2 = styled.span`
  position: absolute;
  left: 500px;
  top: 450px;
`;
const StRow = styled.div`
  width: 400px;
  display: felx;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StH = styled.h4`
  width: 40px;

  margin: 0px 10px 0px 0px;
  position: absolute;
  left: 500px;
  top: 398px;
`;
const StH2 = styled.h4`
  width: 40px;

  margin: 0px 10px 0px 0px;
  position: absolute;
  left: 500px;
  top: 476px;
`;

const InputWithLabelDefault = styled.input`
  width: 200px;
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
  position: relative;
  left: 30px;
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
