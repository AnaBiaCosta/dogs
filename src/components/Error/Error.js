import React from 'react'
import { ErrorMessage } from './Error.style'

const Error = ({ error }) => {
  if(!error) return null

  return (
    <ErrorMessage>{error}</ErrorMessage>
  )
}

export { Error }
