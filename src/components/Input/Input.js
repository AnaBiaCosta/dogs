import React from 'react'
import { Wrapper, Label, InputForm, Error } from './Input.style'

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</ Label>
      <InputForm
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
}

export { Input }
