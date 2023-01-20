import React from 'react'
import { DefaultContext } from 'react-icons'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import ButtonDefault from './ButtonDefault';

//style, images, etc
import logo from '../images/myGiraffe.png'
import { COLORS } from "../style/StyleGlobal";
import {  } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const onClickHeaderLogo=()=>{
        navigate('/')
    }

    const onClickLogout=()=>{
        localStorage.clear('token')
        localStorage.clear('refreshToken')
        window.location.href='/'
        alert('로그아웃 되었습니다!')
        //navigate('/')
    }
    // 로그인 페이지에서 공통헤더 숨김처리
    if (window.location.pathname === '/') return null
  return (
    <StHeaderWrap>
        <StHeaderLogoImg onClick={onClickHeaderLogo}></StHeaderLogoImg>
        <ButtonDefault bgColor={COLORS.defaultLemon} hoverBgColor="green" onClick={onClickLogout}>로그아웃</ButtonDefault>
    </StHeaderWrap>
  )
}

const StHeaderWrap=styled.div`
    display: flex;
    padding: 20px;
    background-color: #e0dcff;
    justify-content: space-between;
    align-items: center;
`
const StHeaderLogoImg=styled.img.attrs({
    src: `${logo}`
})`
    width: 100px;
    cursor:pointer;
`

export default Header