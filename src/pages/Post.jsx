import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonDefault from "../components/ButtonDefault";
import { COLORS } from "../style/StyleGlobal";
//import FormData from "../components/FormData";
import { useDispatch, useSelector } from "react-redux";
import { __postFormData } from "../redux/modules/postSlice";
import { serverUrl } from "../redux/modules";
import axios from "axios";

const Post = () => {
  const dispatch = useDispatch();

  // 정답입력 유효성
  const [inputAnswer, setInputAnswer] = useState("");

  const IsAnswer = (e) => {
    e.preventDefault();
    const curValue = e.currentTarget.value;
    const notAnswer = /[~!@#$%";'^,&*()_+|</>=>`?:{[\\}]/g;

    setInputAnswer(curValue.replace(notAnswer, ""));
  };

  // 힌트입력 유효성
  const [inputHint, setInputHint] = useState("");

  const IsHint = (e) => {
    e.preventDefault();
    const curValue = e.currentTarget.value;
    const notHint = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;

    setInputHint(curValue.replace(notHint, ""));
  };
  const [difficult, setDifficult] = useState();

  //미리보기
  const [imageSrc, setImageSrc] = useState();
  const encodeFileToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
        console.log("setImage", reader.result);
      };
    });
  };
  const [fileImg, setFileImg] = useState();

  // let formData;
  const formData = new FormData();
  const onChangeFile = (e) => {
    //encodeFileToBase64(e.target.files[0]);
    const formImg = e.target.files[0];
    setFileImg(formImg);
    console.log("이미지파일전송", formImg);
    formData.append("file", formImg);

    //콘솔찍어보기
    for (const key of formData.keys()) {
      console.log("key", key);
    }
  };

  // 난이도 선택  / 값이 왜 밀릴까?
  const onDifficult = (e) => {
    //e.preventDefault();
    setDifficult(e.target.value);
    console.log("diff", difficult);
  };

  // 디스패치
  const onClickFormData = (e) => {
    e.preventDefault();

    const newList = {
      imageSrc,
      difficult,
      inputAnswer,
      inputHint,
    };

    // 난이도, 정답인풋, 힌트인풋
    formData.append("image", fileImg);
    formData.append("difficult", difficult);
    formData.append("inputAnswer", inputAnswer);
    formData.append("inputHint", inputHint);

    // 이렇게 콘솔찍으면 안보임
    // console.log("ㅁㄴㅇ", formData);

    //콘솔찍어보기
    for (const form of formData) {
      console.log("form최종", form);
    }

    dispatch(__postFormData(formData));
  };

  return (
    <StPost>
      <StBox>
        <StForm
          method="post"
          action="uploadForm"
          enctype="multipary/form-data"
          target="_blank"
          onSubmit={onClickFormData}
        >
          <Wrap>
            {imageSrc ? (
              <>
                <StPrivew>
                  {imageSrc && <Stimg src={imageSrc} alt="preview-img" />}
                </StPrivew>

                <StIn2
                  type="file"
                  id="preview"
                  name="image"
                  accept="image/*"
                  onChange={onChangeFile}
                  // onChange={(e) => {
                  //   encodeFileToBase64(e.target.files[0]);
                  // }}
                />
              </>
            ) : (
              <StIn
                type="file"
                id="preview"
                name="image"
                accept="image/*"
                onChange={onChangeFile}
                // onChange={(e) => {
                //   encodeFileToBase64(e.target.files[0]);
                // }}
              />
            )}
          </Wrap>
          <StRightForm>
            <StDifficult>
              <p>난이도 -</p>
              <StSelect onChange={onDifficult} value={difficult}>
                <option value="0" key="0">
                  난이도 선택
                </option>
                <option value="1" key="1">
                  ⭐️
                </option>
                <option value="2" key="2">
                  ⭐️⭐️
                </option>
                <option value="3" key="3">
                  ⭐️⭐️⭐️
                </option>
                <option value="4" key="4">
                  ⭐️⭐️⭐️⭐️
                </option>
                <option value="5" key="5">
                  ⭐️⭐️⭐️⭐️⭐️
                </option>
              </StSelect>
            </StDifficult>
            <StPostinput
              placeholder="정답입력"
              value={inputAnswer}
              onChange={IsAnswer}
            ></StPostinput>
            <StPostinput
              placeholder="힌트입력"
              value={inputHint}
              onChange={IsHint}
            ></StPostinput>
          </StRightForm>
          <ButtonDefault
            bgColor={COLORS.defaultLight}
            hoverBgColor={COLORS.defaultBold}
            hoverFontColor={COLORS.defaultWhite}
          >
            작성완료
          </ButtonDefault>
        </StForm>
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

const StBox = styled.div`
  width: 260px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StForm = styled.form`
  display: flex;
  flex-direction: row;
`;
const StRightForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  position: relative;
  top: 50px;
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

const StIn = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 5px;
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
  object-fit: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 130px;
`;
const StIn2 = styled.input`
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
