import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonDefault from "../components/ButtonDefault";
import { COLORS } from "../style/StyleGlobal";
import { useNavigate } from "react-router-dom";
import InputWithLabelDefault from "../components/InputWithLabelDefault";
import { useDispatch, useSelector } from "react-redux";
import { __postFormData } from "../redux/modules/postSlice";
import CanvasTest from "../components/CanvasTest";

const Post2 = () => {
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
    encodeFileToBase64(e.target.files[0]);
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
    formData.append("image", formSaveImg);
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
    alert("업로드 성공🦒");
    navigate("/posts");
  };
  //answer 상태, 상태 메세지
  const [isAnswer, setIsAnswer] = useState(false);
  const [validMessageAnswer, setValidMessageAnswer] = useState("");
  //hint 상태, 상태 메세지
  const [isHint, setIsHint] = useState(false);
  const [validMessageHint, setValidMessageHint] = useState("");

  // 정답입력시 유효성검사
  const checkPostDetailInputAnswer = (e) => {
    //유효성 검사 닉네임에서 코드 그대로 가져옴
    const regexNickname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;
    let { value } = e.target;
    if (!regexNickname.test(value)) {
      setIsAnswer(false);
      console.log("setIsNickname : ", isAnswer);
      return setValidMessageAnswer("❗ 한글, 영어, 숫자 / 10자 이내로 입력");
    } else {
      setIsAnswer(true);
      console.log("setIsNickname : ", isAnswer);
      return setValidMessageAnswer("");
    }
  };
  // 힌트입력시 유효성검사
  const checkPostDetailInputHint = (e) => {
    //유효성 검사 닉네임에서 코드 그대로 가져옴
    const regexNickname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;
    let { value } = e.target;
    if (!regexNickname.test(value)) {
      setIsHint(false);
      console.log("setIsNickname : ", isHint);
      return setValidMessageHint("❗ 한글, 영어, 숫자 / 10자 이내로 입력");
    } else {
      setIsHint(true);
      console.log("setIsNickname : ", isHint);
      return setValidMessageHint("");
    }
  };

  const navigate = useNavigate();
  const onClickGoHome = () => {
    navigate("/posts");
  };

  //변환

  const saveData = useSelector((state) => state.post2Slice.decodeImg);

  function base64toFile(saveData, filename) {
    if (saveData !== null) {
      var arr = saveData.split(","),
        mime = "png",
        bstr = window.atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
    }
  }
  const formSaveImg = base64toFile(saveData, "test.png");
  console.log("saveData2", saveData);
  console.log("base64toFile", base64toFile(saveData, "test.png"));

  return (
    <StPost>
      <StPostIn>
        <StHomeForm>
          <StHomeBtn
            src="img/homeIcon3.png"
            onClick={onClickGoHome}
          ></StHomeBtn>
        </StHomeForm>
        <StForm
          method="post"
          action="uploadForm"
          enctype="multipary/form-data"
          target="_blank"
          onSubmit={onClickFormData}
        >
          <StLeftForm>
            <CanvasTest />
          </StLeftForm>
          <StRightForm>
            <StDifficult>
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
            <InputWithLabelDefault
              inputPaceholder="정답 입력하기"
              width="90%"
              value={inputAnswer}
              onChange={IsAnswer}
              validMessage={validMessageAnswer}
              onBlur={checkPostDetailInputAnswer}
              className="postDetailInputAnswer"
            />
            {/* <StPostinput
            placeholder="정답입력"
            value={inputAnswer}
            onChange={IsAnswer}
          ></StPostinput> */}
            <InputWithLabelDefault
              inputPaceholder="힌트 입력하기"
              width="90%"
              value={inputHint}
              onChange={IsHint}
              validMessage={validMessageHint}
              onBlur={checkPostDetailInputHint}
              className="postDetailInputHint"
            ></InputWithLabelDefault>
            <StFinalBtn>
              <ButtonDefault
                bgColor={COLORS.defaultLight}
                hoverBgColor={COLORS.defaultBold}
                hoverFontColor={COLORS.defaultWhite}
              >
                작성완료
              </ButtonDefault>
            </StFinalBtn>
          </StRightForm>
        </StForm>
      </StPostIn>
    </StPost>
  );
};

export default Post2;

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

const StHomeForm = styled.div`
  width: 500px;
  z-index: 9;
  position: relative;
  left: 660px;
  top: -40px;
`;

const StHomeBtn = styled.img`
  width: 30px;
  height: 30px;

  cursor: pointer;
`;

const StPostIn = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; */
`;
const StForm = styled.form`
  display: flex;
  flex-direction: row;
  position: relative;
  top: -25px;
  left: 10px;
`;

const StLeftForm = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid black;
  margin: 10px 0px 10px 10px;
  position: relative;
  right: 20px;
  display: flex;

  align-items: center;
  justify-content: center;
`;
const Stimg = styled.img`
  width: 400px;
  height: 400px;
`;

const StRightForm = styled.div`
  width: 260px;
  height: 400px;
  margin: 10px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StctrlBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const StImgIcon = styled.img`
  width: 40px;
  height: 40px;
  z-index: 99;
  position: relative;
  left: -20px;
  cursor: pointer;
`;
const StSpan = styled.span`
  font-family: "Hi Melody", cursive;
`;
const StIn2 = styled.input`
  width: 37px;
  height: 34px;

  position: relative;
  right: 40px;
  top: -22px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  opacity: 60%;
`;

const StDifficult = styled.div`
  width: 250px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  //margin: 16px;
`;
const StSelect = styled.select`
  width: 250px;
  height: 36px;
  border: 2px solid black;
  border-radius: 6px;
  margin-top: -3px;
`;
const StPrivew = styled.div`
  object-fit: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StPostinput = styled.input``;
const StFinalBtn = styled.div``;
