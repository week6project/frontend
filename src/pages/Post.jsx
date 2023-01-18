import React, { useState } from "react";
import styled from "styled-components";
import ButtonDefault from "../components/ButtonDefault";
import { COLORS } from "../style/StyleGlobal";
import FormData from "../components/FormData";

const Post = () => {
  return (
    <StPost>
      <StBox>
        <FormData />
        <ButtonDefault
          bgColor={COLORS.defaultLight}
          hoverBgColor={COLORS.defaultBold}
          hoverFontColor={COLORS.defaultWhite}
        >
          작성완료
        </ButtonDefault>
      </StBox>
    </StPost>
  );
};

export default Post;

const StPost = styled.div`
  background-image: url("img/myGiraffe_BG-01.png"),
    url("img/myGiraffe_BG-02.png");

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 1920px;
  min-width: 800px;
  max-height: 1080px;
  min-height: 800px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid black;
  margin: 20px;
  display: flex;

  align-items: center;
  justify-content: center;
`;
const Stimg = styled.img`
  width: 400px;
  height: 400px;
`;

const StIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StBox = styled.div`
  width: 260px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StData = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 16px;
`;
const StInData = styled.div`
  width: 160px;
  border: 0px;

  color: blue;
`;
const StDifficult = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 16px;
`;
const StSelect = styled.select`
  width: 120px;
  border: 2px solid black;
  border-radius: 5px;
  margin-top: -3px;
`;
const StPrivew = styled.div`
  object-fit: contain;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 130px;
`;
const StIn2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -200px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  opacity: 60%;
`;
const StPostinput = styled.input`
  margin: 16px;
`;
