import React, { useState } from "react";
import styled from "styled-components";
import {COLORS} from '../style/StyleGlobal'
import ButtonDefault from '../components/ButtonDefault';
import InputWithLabelDefault from '../components/InputWithLabelDefault';
import useInput from '../hooks/useInput';


const PostsDetail = () => {

  const [valueAnswer, onChangeValueAnswer, setValuAnswer]=useInput('')

  const onSubmitPostsDetailAnswer=(e)=>{
    e.preventDefault()
    alert('정답 제출 클릭')
  }

  const onClickViewHint=()=>{
    alert('힌트 클릭')
  }

  return (
    <StPostsWrap>
      <StPostsBox>
        <StPostsDetailImg/>
        <StPostsDetailInfoBox>
          <StPostsDetailInfoWrite>
            <StPostsDetailInfoWriteAuth>출제자 : 가나다라마바사아자차</StPostsDetailInfoWriteAuth>
            <StPostsDetailInfoWriteDate>출제일 : 2023-01-01</StPostsDetailInfoWriteDate>
            <StPostsDetailInfoWriteDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDetailInfoWriteDifficulty>
          </StPostsDetailInfoWrite>
          <StPostsDetailInfoAnswer onSubmit={onSubmitPostsDetailAnswer}>
            <ButtonDefault onClick={onClickViewHint} bgColor={COLORS.defaultLight} hoverBgColor={COLORS.defaultBold}>
              힌트 보기</ButtonDefault>
            <StPostsDetailInfoAnswerForm>
              <InputWithLabelDefault autoFocus="autofocus" inputType="text" inputId="postsDetailInputAnswer"
              inputValue={valueAnswer} onChange={onChangeValueAnswer} inputPaceholder="정답 입력하기"
              width="90%"
              />
              <ButtonDefault bgColor={COLORS.defaultOrangeLight} hoverBgColor={COLORS.defaultOrange}>정답 제출</ButtonDefault>
            </StPostsDetailInfoAnswerForm>
          </StPostsDetailInfoAnswer>
          <StPostsDetailSuccessListBox>
            <StPostsDetailSuccessListBoxTitle>정답 맞춘 사람들👍</StPostsDetailSuccessListBoxTitle>
            <StPostsDetailSuccessListUlBox>
              <StPostsDetailSuccessListUl>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
                <StPostsDetailSuccessListAuth>
                  <StPostsDetailSuccessListAuthSpan>가나다라마바사아자차</StPostsDetailSuccessListAuthSpan>
                </StPostsDetailSuccessListAuth>
              </StPostsDetailSuccessListUl>
            </StPostsDetailSuccessListUlBox>
          </StPostsDetailSuccessListBox>
        </StPostsDetailInfoBox>
      </StPostsBox>
    </StPostsWrap>
  );
};


const StPostsDetailSuccessListAuthSpan=styled.span`
`
const StPostsDetailSuccessListAuth=styled.li`
  width: calc(100% - 20px);
  text-align: center;
  border-bottom: 1px solid ${COLORS.defaultLight};
  padding: 0 10px 5px;
  margin-bottom: 5px;
`

const StPostsDetailSuccessListUlBox=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
`
const StPostsDetailSuccessListUl=styled.ul`
  width: 100%;
  height: 194px;
  overflow-y: auto;
    ::-webkit-scrollbar {
    width: 10px;
}
    ::-webkit-scrollbar-track {
        background-color: #fa9370;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #f44408;
        border-radius: 10px;
    }

`
const StPostsDetailSuccessListBoxTitle=styled.span`
  font-weight: bold;
  display: block;
  text-align: center;
  margin-top: 10px;;
`
const StPostsDetailSuccessListBox=styled.div`
  border: 1px solid ${COLORS.defaultBold};
  border-radius: 10px;
  margin-top: 20px;
  height: 246px;
`
const StPostsDetailInfoAnswerForm=styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
`
const StPostsDetailInfoAnswer=styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`
const StPostsDetailInfoWriteDifficulty=styled.span`
  
`
const StPostsDetailInfoWriteDate=styled.span`
  
`
const StPostsDetailInfoWriteAuth=styled.span`

`
const StPostsDetailInfoWrite=styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const StPostsDetailInfoBox=styled.div`
  width: 50%;
`
const StPostsDetailImg=styled.img.attrs(props=>({
  src: `${props.src || '/img/myGiraffe.png'}`,
  alt: `${props.alt || '썸네일 이미지'}`,
}))`
  width: 400px;
  border: 1px solid ${COLORS.defaultBold};
  border-radius: 30px;
  margin-right: 20px;
`

const StPostsBox=styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 720px;
  height: 510px;
`
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

export default PostsDetail;