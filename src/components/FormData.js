import React, { useState } from "react";
import styled from "styled-components";

const FormData = () => {
  // 정답입력 특수문자제외
  const [inputAnswer, setInputAnswer] = useState("");

  const IsAnswer = (e) => {
    const curValue = e.currentTarget.value;
    const notAnswer = /[~!@#$%";'^,&*()_+|</>=>`?:{[\\}]/g;

    setInputAnswer(curValue.replace(notAnswer, ""));
  };

  // 힌트입력 특수문자제외
  const [inputHint, setInputHint] = useState("");

  const IsHint = (e) => {
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
    //setImageSrc([...imageSrc, s])
    //   const formData= new FormData();
    //   formData.append("image",fileBlob)
    //   try {
    //     const imageRes = await axios.post(`localhost:3000/image`, formData);
    //   } catch (error) {
    //     console.log(error);
    //     alert('server error');
    //   }
    // };

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <Wrap>
        {imageSrc ? (
          <>
            <StPrivew>
              {imageSrc && <Stimg src={imageSrc} alt="preview-img" />}
            </StPrivew>
            <StIn2 id="imageEdit">
              <input
                type="file"
                id="preview"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}
              />
            </StIn2>
          </>
        ) : (
          <StIn id="imageEdit">
            <input
              type="file"
              id="preview"
              name="image"
              accept="image/*"
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
          </StIn>
        )}
      </Wrap>
      <StDifficult>
        <p>난이도 -</p>
        <StSelect value={difficult}>
          <option>⭐️</option>
          <option>⭐️⭐️</option>
          <option>⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️⭐️</option>
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
    </>
  );
};

export default FormData;
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
