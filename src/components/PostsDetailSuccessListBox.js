import React, { useState, useEffect, useRef  } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//component, hooks
import ButtonDefault from '../components/ButtonDefault';
import InputWithLabelDefault from '../components/InputWithLabelDefault';
import useInput from '../hooks/useInput';
import { __getPostDetail } from '../redux/modules/postDetailSlice';
import PostsDetailSuccessListAuth from '../components/PostsDetailSuccessListAuth';

//style, etc
import styled from "styled-components";
import {COLORS} from '../style/StyleGlobal'
import '../css/style.css'

const PostsDetailSuccessListBox = (postsDetailState) => {
    let keyI = 1
    const { isLoading, error, postDetail } = postsDetailState
    const passedPeople = postDetail?.passedPeople
    console.log('정답자 명단 보기 : ', passedPeople)

  return (
    <StPostsDetailSuccessListBox>
        <StPostsDetailSuccessListBoxTitle>정답 맞춘 사람들👍</StPostsDetailSuccessListBoxTitle>
            <StPostsDetailSuccessListUlBox>
                <StPostsDetailSuccessListUl>
                    {isLoading && <StCenterMessage>열심히 데이터를 불러오는 중이에요~!</StCenterMessage>}
                    {error && <StCenterMessage>에러가 났네요! 다시 시도해주세요!</StCenterMessage>}
                    {!isLoading && !error 
                    ? postDetail?.passedPeople?.length === 0
                      ? <StCenterMessage>정답자가 없습니다!</StCenterMessage>
                      : passedPeople?.map((person)=>{
                        console.log('person: ', person)
                        return (
                          <PostsDetailSuccessListAuth key={keyI++} person={person}/>
                          )
                        })
                    : null
                    }
                    
                </StPostsDetailSuccessListUl>
        </StPostsDetailSuccessListUlBox>
    </StPostsDetailSuccessListBox>
  )
}



const StCenterMessage=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-weight: bold;
  font-size: 16;
  color: red;
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
  height: 150px;
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
  height: 202px;
`


export default PostsDetailSuccessListBox