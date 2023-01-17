import React,{useState, useEffect}from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

//component, hooks
import PostsCard from '../components/PostsCard';
import ButtonDefault from '../components/ButtonDefault';
import { __getPosts } from '../redux/modules/postsSlice';

//style, etc
import '../css/reset.css'
import '../css/style.css'
import {COLORS} from '../style/StyleGlobal'




const Posts = () => {

  const dispatch = useDispatch()

  const { isLoading, error, posts } = useSelector((state) => state.postsSlice);

  useEffect(()=>{ //페이지 렌더링 후 posts 목록 가져오기
    dispatch(__getPosts())
  }, [dispatch])

  const navigate=useNavigate()
  const onClickNavPost=()=>{ //문제내기 버튼 클릭시 글작성 페이지로 이동
    navigate('/post')
  }

  return (
    <StPostsWrap>
      <StPostsButtonBox>
        <ButtonDefault onClick={onClickNavPost} bgColor={COLORS.defaultLight} hoverBgColor={COLORS.defaultPoint}>문제내기</ButtonDefault>
      </StPostsButtonBox>
      <StPostsUl>
        {isLoading && <StCenterMessage>열심히 데이터를 불러오는 중이에요~!</StCenterMessage>}
        {error && <StCenterMessage>에러가 났네요! 다시 시도해주세요!</StCenterMessage>}
        {posts.map((post)=>{ //정답자 없는 문제 출력
          return(
          !post.inputAnswer
          && <PostsCard key={post.postNo} postNo={post.postNo} image={post.image} nickname={post.nickname} createdAt={post.createdAt}
            difficult={post.difficult}
            ></PostsCard>
           )
        })}
        {posts.map((post)=>{ //정답자 있는 문제 출력
          return(
            post.inputAnswer
            && <PostsCard key={post.postNo} postNo={post.postNo} image={post.image} nickname={post.nickname} createdAt={post.createdAt}
              difficult={post.difficult} inputAnswer={post.inputAnswer}
              ></PostsCard>
          )
        })}
      </StPostsUl>
    </StPostsWrap>
  )
}

const StCenterMessage=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  font-weight: bold;
  font-size: 20px;
`

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
  max-width: 1400px;
  min-width: 380px;
  margin: 50px auto 0;
`


export default Posts