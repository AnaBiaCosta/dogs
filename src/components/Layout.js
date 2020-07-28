import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap');
  box-sizing: border-box;

  body {
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
    font-family: var(--type-first);
    width: 100%;
    padding-top: 4rem;
  }

  header {
    max-width: 50rem;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }
`

const Main = styled.main`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      { children }
    </Main>
  )
}

export { Layout }
