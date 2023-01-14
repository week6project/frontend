import React,{useState, useEffect}from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux';
//component, hooks

import '../css/style.css'

const Posts = () => {
  return (
    <StPostsWrap>Posts</StPostsWrap>
  )
}


const StPostsWrap=styled.div`
  border: 1px solid red;
  max-width: 1000px;
  min-width: 380px;

  margin: 0 auto;

`


export default Posts