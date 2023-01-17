import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
//component, hooks

//style, etc
import '../css/reset.css'
import '../css/style.css'
import {COLORS} from '../style/StyleGlobal'


const PostsCard = ({postNo, image, nickname, createdAt, difficult, inputAnswer}) => {
  const dateEdit = createdAt.slice(0, 10) //날짜 형식에 맞게 가공
  const star = '⭐'.repeat(difficult) //난이도 수치에 맞게 별 모양 출력
  return (
        <StPostsCard className={inputAnswer && 'inputAnswer-true'}>
          <Link to={`/posts/${postNo}`} className="postsCardLink">
            {inputAnswer
            && <StIconInputAnswer>✔</StIconInputAnswer>
            }
            <StPostsCardImg src={image} />
            <StPostsInfoBox>
              <StPostsAuth>출제자 : {nickname}</StPostsAuth>
              <StPostsDate>출제일 : {dateEdit}</StPostsDate>
              <StPostsDifficulty>난이도 : {star}</StPostsDifficulty>
            </StPostsInfoBox>
          </Link>
        </StPostsCard>
  )
}

const StIconInputAnswer=styled.span`
  color: ${COLORS.defaultOrange};
  font-size: 30px;
  position: absolute;
  left: 5px;
  top: -2px;
`
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
  width: 18.6%;
  min-width: 210px;
  height: 290px;
  position: relative;
  :hover{
    background-color: ${COLORS.defaultLight};
  }
`


export default PostsCard