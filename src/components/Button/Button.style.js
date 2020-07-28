import styled from 'styled-components'

export const FormButton = styled.button`
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
  opacity: ${props => props.disabled ? "0.5" : "1"};
  cursor: ${props => props.disabled ? "wait" : "pointer"};

  :hover, :focus {
    outline: none;
    box-shadow: 0 0 0 3px #FEA, 0 0 0 4px #FB1;
  }
`
