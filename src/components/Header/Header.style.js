import styled from 'styled-components'

export const HeaderNav = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background-color: white;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #333;
  }

  svg {
    padding: 0.5rem 0;
  }

  span {
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.5rem;
      color: #333;
    }
  }
`
