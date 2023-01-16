import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//component, hooks

//style, etc
import '../css/reset.css'
import '../css/style.css'
import {COLORS} from '../style/StyleGlobal'


const PostsCard = () => {

  return (
        <StPostsCard>
          <Link to="/" className="postsCardLink">
            <StPostsCardImg />
            <StPostsInfoBox>
              <StPostsAuth>출제자 : 가나다라마바사아자차</StPostsAuth>
              <StPostsDate>출제일 : 2023-01-01</StPostsDate>
              <StPostsDifficulty>난이도 : ⭐⭐⭐⭐⭐</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
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
const StPostsCardImg=styled.img.attrs(props=>({
  src: `${props.src || 'img/myGiraffe.png'}`,
  alt: `${props.alt || '썸네일 이미지'}`,
}))`
  width: 80%;
  border: 1px solid ${COLORS.defaultPoint};
  border-radius: 20px;
  margin-bottom: 10px;
`

const StPostsCard=styled.li`
  border: 1px solid ${COLORS.defaultLight};
  border-radius: 20px;
  width: 23.6%;
  min-width: 210px;
  :hover{
    background-color: ${COLORS.defaultLight};
  }
`


export default PostsCard