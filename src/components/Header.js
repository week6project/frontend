import React from 'react'
import { DefaultContext } from 'react-icons'
import styled from 'styled-components'
//style, images, etc
import logo from '../images/logo.png'

const Header = () => {
  return (
    <StHeaderWrap>
        <StHeaderLogoImg></StHeaderLogoImg>
    </StHeaderWrap>
  )
}

const StHeaderWrap=styled.div`
    display: flex;
    padding: 20px;
    margin-bottom: 50px;
    background-color: #e2e2e2;
`
const StHeaderLogoImg=styled.img.attrs({
    src: `${logo}`
})`
    width: 50px;
`

export default Header