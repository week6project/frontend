import React from 'react'
import styled from "styled-components";

const ErrorBox = () => {
  return (
    <StCenterMessage>에러가 났네요! 다시 시도해주세요!</StCenterMessage>
  )
}

const StCenterMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  font-weight: bold;
  font-size: 20px;
`;



export default ErrorBox