import React,{useState, useEffect}from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

//component, hooks
import PostsCard from '../components/PostsCard';
import ButtonDefault from '../components/ButtonDefault';

//style, etc
import '../css/reset.css'
import '../css/style.css'
import {COLORS} from '../style/StyleGlobal'




const Posts = () => {

  const navigate=useNavigate()
  const onClickNavPost=()=>{
    navigate('/post')
  }

  return (
    <StPostsWrap>
      <StPostsButtonBox>
        <ButtonDefault onClick={onClickNavPost} bgColor={COLORS.defaultLight} hoverBgColor={COLORS.defaultPoint}>문제내기</ButtonDefault>
      </StPostsButtonBox>
      <StPostsUl>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
        <PostsCard></PostsCard>
      </StPostsUl>
    </StPostsWrap>
  )
}


const StPostsButtonBox=styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: right;
  padding: 0 20px;
`
const StPostsUl=styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  min-height: 400px;
  max-height: 600px;
  border: 1px solid ${COLORS.defaultBold};
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
const StPostsWrap=styled.div`
  max-width: 1300px;
  min-width: 380px;
  margin: 50px auto 0;
`


export default Posts