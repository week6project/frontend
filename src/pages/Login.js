import React, { useState } from "react";
import styled from "styled-components";

//로그인 창
const Login = () => {
  const [LoginId, setLoginId] = useState("");

  const IsLoginId = (e) => {
    const curValue = e.currentTarget.value;
    const notId = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;
    // 정규식에 역슬래시 적용이 안됨
    setLoginId(curValue.replace(notId, ""));
  };
  const [LoginPw, setLoginPw] = useState("");

  const IsLoginPw = (e) => {
    const curValue = e.currentTarget.value;
    const notPw = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;

    setLoginPw(curValue.replace(notPw, ""));
  };

  return (
    <StLogin>
      <StForm name="LoginPage" method="POST">
        <StImg src="img/myGiraffe.png" alt="내기린_로고" />

        <StIDPW>
          <StH>ID</StH>
          <StInput
            type="text"
            name="ID"
            maxlength="10"
            value={LoginId}
            onChange={IsLoginId}
          />
        </StIDPW>
        <StIDPW>
          <StH>PW</StH>
          <StInput
            type="password"
            name="password"
            maxlength="10"
            value={LoginPw}
            onChange={IsLoginPw}
          />
        </StIDPW>
        <StBtn>
          <button>Social Login</button>
          <StBtnRow>
            <button>Login</button>
            <button>Sign Up</button>
          </StBtnRow>
          <Stbutton>Forgot PW</Stbutton>
        </StBtn>
      </StForm>
    </StLogin>
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
