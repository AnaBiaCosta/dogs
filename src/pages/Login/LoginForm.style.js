import styled from 'styled-components'

export const FormContent = styled.form`
  margin-bottom: 2rem;
`

export const PasswordLostContent = styled.span`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  :after  {
    content: '';
    height: 2px;
    width: 100%;
    background-color: currentColor;
    display: block;
  }
`

export const RegisterContent = styled.div`
  margin-top: 4rem;

  h2 {
    font-family: var(--type-second);
    font-weight: 700;
    line-height: 1;
    font-size: 2rem;

    :after {
      content: '';
      display: block;
      background-color: #DDD;
      height: 0.5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }
  
   p {
     margin-top: 2rem;
     margin-bottom: 2rem;
   }
`

export const LinkContent = styled.span`
  font-size: 1rem;
  font-family: var(--type-first);
  padding: 0.8rem 1.2rem;
  min-width: 8rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.4rem;
  color: #764701;
  background-color: #FB1;
  transition: 0.1s;
  margin-top: 10px;

  :hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px #FEA, 0 0 0 4px #FB1;
  }
`