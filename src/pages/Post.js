import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  return (
    <StPost>
      {/* 임시버튼: 최종때는 헤더넣을 예정 */}
      <StNvHome
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </StNvHome>
      <StImg src="img/myGiraffe.png" alt="내기린_로고" />

      <StView>imageaaa</StView>
    </StPost>
  );
};

export default Post;

const StPost = styled.div`
  max-width: 1920px;
  min-width: 1020px;
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

const StImg = styled.img`
  width: 300px;

  position: absolute;
  top: 0%;
  left: 0%;
`;

const StView = styled.div`
  width: 600px;
`;
