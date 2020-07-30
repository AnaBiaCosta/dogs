import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');
  box-sizing: border-box;

  body {
    color: #333;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', georgia;
    font-family: var(--type-first);
    width: 100%;
    padding-top: 4rem;
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

  a {
    text-decoration: none;
    color: #333;
  }

  section {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyle />
      { children }
    </main>
  )
}

export { Layout }
