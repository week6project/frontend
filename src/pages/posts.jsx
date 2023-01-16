import React,{useState, useEffect}from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

//component, hooks

//style, etc
import '../css/reset.css'
import '../css/style.css'
import {COLORS} from '../style/StyleGlobal'




const Posts = () => {
  return (
    <StPostsWrap>
      <StPostsUl>
      <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg/>
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
        <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg/>
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
        <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg/>
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
        <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg/>
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
        <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg/>
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
        <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg/>
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
        <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg/>
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
      </StPostsUl>
    </StPostsWrap>
  )
}


const StPostsDifficulty=styled.span`
  
`
const StPostsDate=styled.span`
  margin-bottom: 10px;
`
const StPostsAuth=styled.span`
  margin-bottom: 10px;
`
const StPostsInfoBox=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: calc(100% - 40px);
  padding: 0 20px;
`
const StPostsCardImg=styled.img.attrs({
  src: `img/myGiraffe.png`
})`
  width: 80%;
  border: 1px solid ${COLORS.defaultLight};
  border-radius: 20px;
  margin-bottom: 10px;
`

const StPostsCard=styled.li`
  border: 1px solid ${COLORS.defaultLight};
  border-radius: 20px;
  width: 23.6%;
`
const StPostsUl=styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`
const StPostsWrap=styled.div`
  border: 1px solid ${COLORS.defaultBold};
  max-width: 1300px;
  min-width: 380px;

  margin: 0 auto;

`


export default Posts