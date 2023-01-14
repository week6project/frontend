import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StHome>
      <Stform>
        <StImg src="img/myGiraffe.png" alt="내기린_로고" />
        <StBtnForm>
          <p>임시 버튼 : 최종때는 없앨 예정</p>
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            로그인
          </button>
          <button
            onClick={() => {
              navigate("/Post");
            }}
          >
            글작성
          </button>
        </StBtnForm>
      </Stform>
    </StHome>
  );
};

export default Home;

const StHome = styled.div`
  max-width: 1920px;
  min-width: 1080px;
  max-height: 1080px;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Stform = styled.form`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StImg = styled.img`
  width: 350px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBtnForm = styled.form`
  color: gray;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
