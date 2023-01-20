import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//component, hooks
import InputWithLabelDefault from "./InputWithLabelDefault";
import useInput from "../hooks/useInput";
import ButtonDefault from "./ButtonDefault";
import { isModalGlobalToggleSignup, __signup } from "../redux/modules/signup";
//style, images, etc
import logo from "../images/myGiraffe.png";
import { COLORS } from "../style/StyleGlobal";
import { IoMdCloseCircle } from "react-icons/io";
import "../css/style.css";

const SignupModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useinput
  const [valueId, onChangeInputValueId, setValueId] = useInput("");
  const [valueNickname, onChangeInputValueNickname, setValueNickname] =
    useInput("");
  const [valueEmail, onChangeInputValueEmail, setValueEmail] = useInput("");
  const [valuePw, onChangeInputValuePw, setValuePw] = useInput("");
  const [valuePwCheck, onChangeInputValuePwCheck, setValuePwCheck] =
    useInput("");

  //상태 메세지
  const [validMessageId, setValidMessageId] = useState("");
  const [validMessageNickname, setValidMessageNickname] = useState("");
  const [validMessageEmail, setValidMessageEmail] = useState("");
  const [validMessagePassword, setValidMessagePassword] = useState("");
  const [validMessagePasswordCheck, setValidMessagePasswordCheck] =
    useState("");

  //유효성검사
  const [isId, setIsId] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);

  //Modal Mode
  const { isModalToggleSignup } = useSelector((state) => state.signup);

  const onBlurSignupInputId = (e) => {
    //유효성 검사 아이디
    const regexId = /^[a-z|A-Z|0-9|]{1,10}$/;
    let { value } = e.target;
    if (!regexId.test(value)) {
      setIsId(false);
      console.log("setIsId : ", isId);
      return setValidMessageId("❗ 영어, 숫자 / 10자 이내로 입력");
    } else {
      setIsId(true);
      console.log("setIsId : ", isId);
      return setValidMessageId("");
    }
  };

  const onBlurSignupInputNickname = (e) => {
    //유효성 검사 닉네임
    const regexNickname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;
    let { value } = e.target;
    if (!regexNickname.test(value)) {
      setIsNickname(false);
      console.log("setIsNickname : ", isNickname);
      return setValidMessageNickname("❗ 한글, 영어, 숫자 / 10자 이내로 입력");
    } else {
      setIsNickname(true);
      console.log("setIsNickname : ", isNickname);
      return setValidMessageNickname("");
    }
  };

  const onBlurSignupInputEmail = (e) => {
    //유효성 검사 이메일
    const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let { value } = e.target;
    if (!regexEmail.test(value)) {
      setIsEmail(false);
      console.log("setIsEmail : ", isEmail);
      return setValidMessageEmail("❗ @와 .을 포함한 이메일 형식으로 입력");
    } else {
      setIsEmail(true);
      console.log("setIsEmail : ", isEmail);
      return setValidMessageEmail("");
    }
  };

  const onBlurSignupInputPassword = (e) => {
    //유효성 검사 비밀번호
    const regexPassword = /^[a-z|A-Z|0-9|]{4,30}$/;
    let { value } = e.target;
    if (!regexPassword.test(value)) {
      setIsPassword(false);
      console.log("setIsPassword : ", isPassword);
      return setValidMessagePassword("❗ 영어, 숫자 / 4~30자 이내로 입력");
    } else {
      setIsPassword(true);
      console.log("setIsPassword : ", isPassword);
      return setValidMessagePassword("");
    }
  };
  const onBlurSignupInputPasswordCheck = (e) => {
    //유효성 검사 비밀번호 체크
    // const regexPasswordCheck=/^[a-z|A-Z|0-9|]{1,10}$/
    let { value } = e.target;
    if (valuePw !== value) {
      setIsPasswordCheck(false);
      console.log("setIsPassword : ", isPasswordCheck);
      return setValidMessagePasswordCheck("❗ 비밀번호가 다릅니다!");
    } else {
      setIsPasswordCheck(true);
      console.log("setIsPassword : ", isPasswordCheck);
      return setValidMessagePasswordCheck("");
    }
  };

  const onSubmitSignup = (e) => {
    e.preventDefault();
    if (isId && isNickname && isEmail && isPassword && isPasswordCheck) {
      const newSignup={
        userId: valueId,
        nickname: valueNickname,
        email: valueEmail,
        password: valuePw,
      }
      dispatch(__signup(newSignup))
      alert("회원가입 성공!");
      onClickCloseSignupModal()
      navigate('/')
    } else {
      return false;
    }
  };

  const onClickCloseSignupModal = () => {
    dispatch(isModalGlobalToggleSignup(false));
    console.log("회원가입 닫기 isModal : ", isModalToggleSignup);
  };

  //본문
  return (
    <StSignupModalWrap display={!isModalToggleSignup ? "none" : "block"}>
      <StSignupModalWrapBox>
        <StSignupModalH2>
          <StSignupModalLogo></StSignupModalLogo>
          <StSignupModalInfo>회원가입</StSignupModalInfo>
        </StSignupModalH2>
        <StSignupModalInputForm onSubmit={onSubmitSignup}>
          <StSignupModalInputFormBox>
            <InputWithLabelDefault
              autoFocus="autofocus"
              inputType="text"
              inputId="signupModalInputId"
              inputValue={valueId}
              onChange={onChangeInputValueId}
              onBlur={onBlurSignupInputId}
              validMessage={validMessageId}
              labelText="아이디"
              inputPaceholder={"영어,숫자/ 10자이내"}
            />
            <InputWithLabelDefault
              inputType="text"
              inputId="signupModalInputNickname"
              inputValue={valueNickname}
              onChange={onChangeInputValueNickname}
              onBlur={onBlurSignupInputNickname}
              validMessage={validMessageNickname}
              labelText="닉네임"
              inputPaceholder={"한글,영어,숫자/ 10자이내"}
            />
            <InputWithLabelDefault
              inputType="email"
              inputId="signupModalInputEmail"
              inputValue={valueEmail}
              onChange={onChangeInputValueEmail}
              onBlur={onBlurSignupInputEmail}
              validMessage={validMessageEmail}
              labelText="이메일"
              inputPaceholder={"@와.을 포함한 이메일 형식"}
            />
            <InputWithLabelDefault
              inputType="password"
              inputId="signupModalInputPw"
              inputValue={valuePw}
              onChange={onChangeInputValuePw}
              onBlur={onBlurSignupInputPassword}
              validMessage={validMessagePassword}
              labelText="비밀번호"
              inputPaceholder={"영어,숫자/ 10자이내"}
            />
            <InputWithLabelDefault
              inputType="password"
              inputId="signupModalInputPwCheck"
              inputValue={valuePwCheck}
              onChange={onChangeInputValuePwCheck}
              onBlur={onBlurSignupInputPasswordCheck}
              validMessage={validMessagePasswordCheck}
              labelText="비밀번호 확인"
              inputPaceholder={"비밀번호 재입력"}
            />
          </StSignupModalInputFormBox>
          <StButtonBox>
            <ButtonDefault
              bgColor={COLORS.defaultLight}
              hoverBgColor={COLORS.defaultBold}
              hoverFontColor={COLORS.defaultWhite}
            >
              회원가입
            </ButtonDefault>
          </StButtonBox>
        </StSignupModalInputForm>
        <IoMdCloseCircle
          onClick={onClickCloseSignupModal}
          className="iconIoMdCloseCircle"
        ></IoMdCloseCircle>
      </StSignupModalWrapBox>
      <StModalDim onClick={onClickCloseSignupModal}></StModalDim>
    </StSignupModalWrap>
  );
};

const StSignupModalInfo = styled.span`
  display: block;
  margin-top: 15px;
  font-weight: bold;
  font-size: 28px;
`;
const StSignupModalWrap = styled.div`
  display: ${(props) => props.display};
`;
const StModalDim = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const StSignupModalH2 = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;
const StSignupModalInputForm = styled.form``;
const StSignupModalInputFormBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const StSignupModalWrapBox = styled.div`
  border: 1px solid #d2d2d2;
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  position: absolute;
  top: calc(50vh - 40%);
  left: calc(50vw - 12%);
  position: absolute;
  z-index: 1;
`;
const StSignupModalLogo=styled.img.attrs({
  src: `${logo}`
})`
  width: 120px;
`;

export default SignupModal;
