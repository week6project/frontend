import React, { useState } from "react";
import styled from "styled-components";

const Post = () => {
  // 정답입력 특수문자제외
  const [Answer, setAnswer] = useState("");

  const IsAnswer = (e) => {
    const curValue = e.currentTarget.value;
    const notAnswer = /[~!@#$%";'^,&*()_+|</>=>`?:{[\\}]/g;

    setAnswer(curValue.replace(notAnswer, ""));
  };

  // 힌트입력 특수문자제외
  const [Hint, setHint] = useState("");
  const [imageSrc, setImageSrc] = useState();

  const IsHint = (e) => {
    const curValue = e.currentTarget.value;
    const notHint = /[~!@#$%";'^,&*()_+|</>=>`?:{[}]/g;

    setHint(curValue.replace(notHint, ""));
  };
  //미리보기
  const encodeFileToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
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
    <StPost>
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
      <StBox>
        <StData>
          <p>출제자 -</p>
          <StInData type="text" name="ID" maxlength="10">
            닉네임 받아올 자리
          </StInData>
        </StData>
        <StData>
          <p>출제일 -</p>
          <StInData type="text" name="ID" maxlength="10">
            해당날짜 받아올 자리
          </StInData>
        </StData>
        <StDifficult>
          <p>난이도 -</p>
          <StSelect>
            <option>⭐️</option>
            <option>⭐️⭐️</option>
            <option>⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️⭐️</option>
          </StSelect>
        </StDifficult>
        <input
          placeholder="정답입력"
          value={Answer}
          onChange={IsAnswer}
        ></input>
        <input placeholder="힌트입력" value={Hint} onChange={IsHint}></input>
        <button>작성완료</button>
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
`;
const StInData = styled.div`
  width: 160px;
  border: 0px;
  margin: 16px;
  color: blue;
`;
const StDifficult = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const StSelect = styled.select`
  width: 120px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 14px;
`;
const StPrivew = styled.div``;
const StIn2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -100px;
`;
