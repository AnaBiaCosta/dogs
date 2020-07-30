import styled from 'styled-components'

export const LoginContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  :before {
    content: '';
    display: block;
    background: url('https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80') no-repeat center center;
    background-size: cover;
    transform: rotateY(180deg);
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    :before {
      display:none;
    }
  }
`

export const FormContent = styled.div`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`
