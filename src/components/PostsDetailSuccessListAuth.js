import React from 'react'

//style, etc
import styled from "styled-components";
import {COLORS} from '../style/StyleGlobal'


const PostsDetailSuccessListAuth = ({person}) => {
  return (
    <StPostsDetailSuccessListAuth>
        <StPostsDetailSuccessListAuthSpan>{person}</StPostsDetailSuccessListAuthSpan>
    </StPostsDetailSuccessListAuth>
  )
}
const StPostsDetailSuccessListAuthSpan=styled.span`
`
const StPostsDetailSuccessListAuth=styled.li`
  width: calc(100% - 20px);
  text-align: center;
  border-bottom: 1px solid ${COLORS.defaultLight};
  padding: 0 10px 5px;
  margin-bottom: 5px;
`

export default PostsDetailSuccessListAuth