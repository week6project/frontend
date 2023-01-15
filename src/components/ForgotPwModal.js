import React,{useState, useEffect}from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux';
//component, hooks
import InputWithLabelDefault from './InputWithLabelDefault'
import useInput from '../hooks/useInput'
import ButtonDefault from './ButtonDefault'
import { isModalGlobalTogglePw } from '../redux/modules/forgotPw'
//style, images, etc
import logo from '../images/myGiraffe.png'
import {COLORS} from '../style/StyleGlobal'
import {IoMdCloseCircle} from 'react-icons/io'
import '../css/style.css'


const ForgotPwModal = () => {

  const dispatch=useDispatch()

  const [ValueId, onChangeInputValueId, setValueId]=useInput('')
  const [valueNickname, onChangeInputValueNickname, setValueNickname]=useInput('')
  const [valueEmail, onChangeInputValueEmail, setValueEmail]=useInput('')
  const [valuePw, onChangeInputValuePw, setValuePw]=useInput('')
  const [valuePwCheck, onChangeInputValuePwCheck, setValuePwCheck]=useInput('')

  const {isModalTogglePw}=useSelector((state)=>state.forgotPw)
  
  console.log('비밀번호 창 isModal : ', isModalTogglePw)
  const onSubmitSignup=(e)=>{
    e.preventDefault()
    alert('클릭')
  }

  const onClickCloseForgotPwModal=()=>{
    dispatch(isModalGlobalTogglePw(false))
    console.log('비밀번호 닫기 isModal : ', isModalTogglePw)
  }


  //본문
  return (
    <StSignupModalWrap display={!isModalTogglePw ? "none" : "block"}>
      <StSignupModalWrapBox>
        <StSignupModalH2>
          <StSignupModalLogo></StSignupModalLogo>
          <StForgotPwModalInfo>비밀번호 변경</StForgotPwModalInfo>
        </StSignupModalH2>
        <StSignupModalInputForm onSubmit={onSubmitSignup}>
          <StSignupModalInputFormBox>
            <InputWithLabelDefault autoFocus="autofocus" inputType="text" inputId="signupModalInputId" inputValue={ValueId} onChange={onChangeInputValueId} 
            labelText="아이디" inputPaceholder={"한글,영어,숫자/ 10자이내"}/>
            <InputWithLabelDefault inputType="email" inputId="signupModalInputEmail" inputValue={valueEmail} onChange={onChangeInputValueEmail} 
            labelText="이메일" inputPaceholder={"@과.com를 포함한 이메일 형식"}/>
            <InputWithLabelDefault inputType="password" inputId="signupModalInputPw" inputValue={valuePw} onChange={onChangeInputValuePw} 
            labelText="비밀번호" inputPaceholder={"영어,숫자/ 10자이내"}/>
            <InputWithLabelDefault inputType="password" inputId="signupModalInputPwCheck" inputValue={valuePwCheck} onChange={onChangeInputValuePwCheck} 
            labelText="비밀번호 확인" inputPaceholder={"비밀번호 재입력"}/>
          </StSignupModalInputFormBox>
          <StButtonBox>
            <ButtonDefault bgColor={COLORS.defaultLight} hoverBgColor={COLORS.defaultBold} hoverFontColor={COLORS.defaultWhite}
            >비밀번호 변경</ButtonDefault>
          </StButtonBox>
        </StSignupModalInputForm>
        <IoMdCloseCircle onClick={onClickCloseForgotPwModal} className="iconIoMdCloseCircle"></IoMdCloseCircle>
      </StSignupModalWrapBox>
      <StModalDim onClick={onClickCloseForgotPwModal}></StModalDim>
    </StSignupModalWrap>
  )
}

const StForgotPwModalInfo=styled.span`
  display: block;
  margin-top: 15px;
  font-weight: bold;
  font-size: 28px;
`
const StSignupModalWrap=styled.div`
  display: ${(props)=> props.display};
`
const StModalDim=styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`
const StButtonBox=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const StSignupModalH2=styled.h2`
  text-align: center;
  margin-bottom: 15px;
`
const StSignupModalInputForm=styled.form`
  
`
const StSignupModalInputFormBox=styled.div`
  display: flex;
  flex-direction: column;
`
const StSignupModalWrapBox=styled.div`
  border: 1px solid #d2d2d2;
  max-width: 390px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  position: absolute;
  top: calc(50vh - 35%); 
  left: calc(50vw - 15%);
  position: absolute;
  z-index: 1;

`
const StSignupModalLogo=styled.img.attrs({
  src: `${logo}`
})`
  width: 120px;
`



export default ForgotPwModal
