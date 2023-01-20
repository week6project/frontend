import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

//component, hooks
import ButtonDefault from "../components/ButtonDefault";
import InputWithLabelDefault from "../components/InputWithLabelDefault";
import useInput from "../hooks/useInput";
import { __getPostDetail } from "../redux/modules/postDetailSlice";
import { __addAnswer } from '../redux/modules/addAnswerSlice';
import PostsDetailSuccessListAuth from "../components/PostsDetailSuccessListAuth";
import PostsDetailSuccessListBox from "../components/PostsDetailSuccessListBox";


//style, etc
import styled from "styled-components";
import { COLORS } from "../style/StyleGlobal";
import "../css/style.css";

const PostDetail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const paramId = parseInt(param.postId); //파라메터값 숫자열로 변환
  const navigate = useNavigate();

  //answer 상태, 상태 메세지
  const [isAnswer, setIsAnswer] = useState(false);
  const [validMessageAnswer, setValidMessageAnswer] = useState("");

  const { isLoading, error } = useSelector((state) => state.postDetailSlice);
  const postsDetailState = useSelector((state) => state.postDetailSlice.postDetail);
  const postDetail = postsDetailState
  console.log('디테일! postsDetailState : ', postDetail)

  //정답자 명단에서 현재 계정 조회 후 isAnswer 값 변경
  console.log('현재 userNo : ', postDetail.userNo)
  console.log('정답자 명단 userNo : ', postDetail.passedUserNo)
  console.log('정답자 isAnswer : ', isAnswer)
  
  const updateIsAnswer=()=>{
    
    if(postDetail?.passedUserNo?.includes(postDetail?.userNo)){
      setIsAnswer(true)
      console.log('***정답 명단 업데이트 : ', postDetail?.passedUserNo?.includes(postDetail?.userNo))
    }
    console.log('***업데이트 정답자 명단 비교 : ', postDetail?.passedUserNo?.includes(postDetail?.userNo))
  }

  const dateEdit = postDetail?.createdAt?.slice(0, 10); //날짜 형식에 맞게 가공
  const star = "⭐".repeat(postDetail?.difficult); //난이도 수치에 맞게 별 모양 출력

  const answerRef = useRef(); // 정답입력인풋



  //data 가져오기
  const [valueAnswer, onChangeValueAnswer, setValuAnswer] = useInput("");
  const [isHint, setIsHint] = useState(false);

  const checkPostDetailInputAnswer = (e) => {
    //유효성 검사 정답 제출
    const regexNickname = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;
    let { value } = e.target;
    if (!regexNickname.test(value)) {
      return setValidMessageAnswer("❗ 한글, 영어, 숫자 / 10자 이내로 입력");
    } else {
      return setValidMessageAnswer("");
    }
  };

  useEffect(() => {
    dispatch(__getPostDetail(paramId));
    updateIsAnswer();
  }, [dispatch]);

  const onSubmitPostsDetailAnswer = (e) => {
    e.preventDefault();
    console.log('onSubmitPostsDetailAnswer 실행!')
    if(postDetail.inputAnswer === valueAnswer){
      const answerd={
        //userNo: postDetail?.userNo, back단에서 처리
        postId: postDetail?.postId
      }
      dispatch(__addAnswer(answerd))
      console.log('정답 제출하고 디스패치 __addAnswer !!')
      setIsAnswer(true)
      alert('정답입니다~! 👏👏👏') 
    }else{
      alert('정답이 아닙니다! 다시 맞춰보세요~😀')
      return answerRef.current.focus();
    }
  };
  const onClickViewHint = () => {
    setIsHint(true);
  };

  const onClickNavigatePosts = () => {
    //메인으로 가기
    navigate("/posts");
  };

  console.log('isAnswer 최종확인 : ', isAnswer)

  return (
    <StPostsWrap>
      <StPostsBox>
        <StPostsDetailImg src={postDetail?.image} />
        <StPostsDetailInfoBox>
          <StPostsDetailInfoWrite>
            <StPostsDetailInfoWriteAuth>
              출제자 : {postDetail?.nickname}
            </StPostsDetailInfoWriteAuth>
            <StPostsDetailInfoWriteDate>
              출제일 : {dateEdit}
            </StPostsDetailInfoWriteDate>
            <StPostsDetailInfoWriteDifficulty>
              난이도 : {star}
            </StPostsDetailInfoWriteDifficulty>
          </StPostsDetailInfoWrite>
          {!isAnswer ? 
            <StPostsDetailInfoAnswer>
              {!isHint ? 
                <ButtonDefault
                  onClick={onClickViewHint}
                  bgColor={COLORS.defaultLight}
                  hoverBgColor={COLORS.defaultBold}
                >
                  힌트 보기
                </ButtonDefault>
               : 
                <StHintSpan>힌트 : {postDetail?.inputHint}</StHintSpan>
              }
              <StPostsDetailInfoAnswerForm onSubmit={onSubmitPostsDetailAnswer}>
                <InputWithLabelDefault
                  inputRef={answerRef}
                  autoFocus="autofocus"
                  inputType="text"
                  inputId="postsDetailInputAnswer"
                  inputValue={valueAnswer}
                  inputPaceholder="정답 입력하기"
                  width="90%"
                  onChange={onChangeValueAnswer}
                  validMessage={validMessageAnswer}
                  onBlur={checkPostDetailInputAnswer}
                  className="postDetailInputAnswer"
                />
                <ButtonDefault
                  bgColor={COLORS.defaultOrangeLight}
                  hoverBgColor={COLORS.defaultOrange}
                >
                  정답 제출
                </ButtonDefault>
              </StPostsDetailInfoAnswerForm>
            </StPostsDetailInfoAnswer>
           : 
            <StPostsDetailInfoAnswer>
              <StHintSpan>힌트 : {postDetail?.inputHint}</StHintSpan>
              <StAnswerSpan>정답 : {postDetail?.inputAnswer}</StAnswerSpan>
            </StPostsDetailInfoAnswer>
          }

          {/* 정답자 컴포넌트 */}
          <PostsDetailSuccessListBox postsDetailState={postsDetailState} />

        </StPostsDetailInfoBox>
        <BsFillArrowLeftCircleFill
          onClick={onClickNavigatePosts}
          className="iconArrow prevIcon"
          aria-label="메인 페이지로 이동"
        />
      </StPostsBox>
    </StPostsWrap>
  );
};

const StHintSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: bold;
`;
const StAnswerSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: bold;
  color: ${COLORS.defaultOrange};
`;
const StPostsDetailInfoAnswerForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
`;
const StPostsDetailInfoAnswer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;
const StPostsDetailInfoWriteDifficulty = styled.span``;
const StPostsDetailInfoWriteDate = styled.span``;
const StPostsDetailInfoWriteAuth = styled.span``;
const StPostsDetailInfoWrite = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const StPostsDetailInfoBox = styled.div`
  width: 50%;
`;
const StPostsDetailImg = styled.img.attrs((props) => ({
  src: `${props.src || "/img/myGiraffe.png"}`,
  alt: `${props.alt || "썸네일 이미지"}`,
}))`
  width: 400px;
  border: 1px solid ${COLORS.defaultBold};
  border-radius: 30px;
  margin-right: 20px;
`;

const StPostsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 720px;
  height: 490px;
  position: relative;
`;
const StPostsWrap = styled.div`
  background-image: url("/img/myGiraffe_BG-01.png"),
    url("/img/myGiraffe_BG-02.png");
  background-size: 2400px 1000px;
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

export default PostDetail;
