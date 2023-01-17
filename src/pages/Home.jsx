import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector} from 'react-redux';
import SignupModal from '../components/SignupModal'
import ForgotPwModal from '../components/ForgotPwModal';
import { isModalGlobalToggleSignup } from '../redux/modules/signup'
import { isModalGlobalTogglePw } from '../redux/modules/forgotPw'

const Home = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  //회원가입, 비밀번호변경
  const {isModalToggleSignup} = useSelector((state)=>state.signup)
  const {isModalTogglePw} = useSelector((state)=>state.forgotPw)

  const onClickOpenSignup=()=>{
    dispatch(isModalGlobalToggleSignup(true))
    console.log('로그인 클릭 isModalOpen : ', isModalToggleSignup)
  }
  const onClickOpenForgotPw=()=>{
    dispatch(isModalGlobalTogglePw(true))
    console.log('비밀번호변경 isModalOpen : ', isModalTogglePw)
  }

  return (
    <StHome>
      <Stform>
        <StImg src="img/myGiraffe.png" alt="내기린_로고" />
        <StBtnForm onSubmit={(e)=>e.preventDefault()}>
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
      <button onClick={onClickOpenSignup}>회원가입</button>
      <button onClick={onClickOpenForgotPw}>비밀번호 변경</button>
      <SignupModal></SignupModal>
      <ForgotPwModal></ForgotPwModal>
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
