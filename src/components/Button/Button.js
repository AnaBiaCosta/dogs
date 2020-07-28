import React from 'react'
import { FormButton } from './Button.style'

const Button = ({ children, ...props }) => {
  return <FormButton { ...props }>{children}</FormButton>
}

export { Button }
