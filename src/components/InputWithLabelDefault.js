import React from 'react'
import styled from 'styled-components'


function InputWithLabelDefault({autoFocus, inputType, inputId, inputValue, inputPaceholder, onChange, width, labelText}) {
  return (
    <>
      { labelText
      ? <StLabelDefault htmlfor={inputId}>{labelText}</StLabelDefault>
      : null
      }
      <StInputDefault type={inputType} id={inputId} value={inputValue} 
      placeholder={inputPaceholder}
      onChange={onChange}
      required
      autoFocus={autoFocus||null}
      width={width}
      />
    </>
  )
}

const StLabelDefault=styled.label`
  display: block;
  margin-bottom: 10px;
`
const StInputDefault=styled.input.attrs(props=>({
    type:props.type || 'text',
    size:props.size || '10'
}))`
  width: ${(props) => props.width || "auto"};
  height: 15px;
  padding: 10px;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  margin-bottom: 15px;

`


export default InputWithLabelDefault
