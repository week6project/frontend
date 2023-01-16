import React from 'react'
import { DefaultContext } from 'react-icons'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
//style, images, etc
import logo from '../images/myGiraffe.png'


const Header = () => {

    const navigate = useNavigate()
    const onClickHeaderLogo=()=>{
        navigate('/')
    }

  return (
    <StHeaderWrap>
        <StHeaderLogoImg onClick={onClickHeaderLogo}></StHeaderLogoImg>
    </StHeaderWrap>
  )
}

const StHeaderWrap=styled.div`
    display: flex;
    padding: 20px;
    background-color: #e0dcff;
`
const StHeaderLogoImg=styled.img.attrs({
    src: `${logo}`
})`
    width: 100px;
    cursor:pointer;
`

export default Header