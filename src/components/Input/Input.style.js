import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`

export const InputForm = styled.input`
  border: 1px solid #EEE;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #EEE;
  transition: 0.2s;
  box-sizing: border-box;

  :focus, :hover {
    outline: none;
    border-color: #FB1;
    background-color: white;
    box-shadow: 0 0 0 3px #FEA;
  }
`

export const Error = styled.p`
  color: #F31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
