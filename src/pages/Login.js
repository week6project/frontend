import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//로그인 창
const Login = () => {
  const navigate = useNavigate();

  return (
    <StLogin>
      {/* 임시버튼: 최종때는 헤더넣을 예정 */}
      <StNvHome
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </StNvHome>
      <StForm name="LoginPage" method="POST">
        <StImg src="img/myGiraffe.png" alt="내기린_로고" />

        <StIDPW>
          <StH>ID</StH>
          <StInput
            type="text"
            name="ID"
            maxlength="10"
            placeholder="작성자 이름을 입력해세요.(10자 이내)"
          />
        </StIDPW>
        <StIDPW>
          <StH>PW</StH>
          <StInput
            type="text"
            name="password"
            maxlength="10"
            placeholder="비밀번호를 입력해주세요.(10자 이내)"
          />
        </StIDPW>
        <StBtn>
          <button>Social Login</button>
          <StBtnRow>
            <button>Login</button>
            <button>Sign Up</button>
          </StBtnRow>
          <button>Forgot PW</button>
        </StBtn>
      </StForm>
    </StLogin>
  );
};

export default Login;

const StLogin = styled.div`
  max-width: 1920px;
  min-width: 1080px;
  max-height: 1080px;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 임시 네비 홈버튼
const StNvHome = styled.button`
  position: absolute;
  top: 0%;
  left: 0%;
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
