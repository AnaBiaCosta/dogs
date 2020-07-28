import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Brand } from '../../assets/dogs.svg'
import { ReactComponent as User } from '../../assets/usuario.svg'
import {
  HeaderNav,
  Nav
} from './Header.style'

const Header = () => {
  return (
    <HeaderNav>
      <Nav>
        <Link to="/" aria-label="Dogs - Home">
          <Brand />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/login">
          <span>
            Login / Criar
            <User />
          </span>
        </Link>
    </Nav>
    </HeaderNav>
  )
}

export { Header }
