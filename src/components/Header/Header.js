import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as Brand } from '../../assets/dogs.svg'
import { ReactComponent as User } from '../../assets/usuario.svg'
import {
  HeaderNav,
  Nav
} from './Header.style'

const Header = () => {
  const { data, userLogout } = useContext(UserContext)

  return (
    <HeaderNav>
      <Nav>
        <Link to="/" aria-label="Dogs - Home">
          <Brand />
        </Link>
        <Link to="/">Home</Link>

        { data ? (
          <Link to="/conta">
            <span>
              { data.nome }
              <User />
            </span>
            <button onClick={userLogout}>Sair</button>  
          </Link>
        ) : (
          <Link to="/login">
            <span>
              Login / Cadastro
              <User />
            </span>
          </Link>
        )}
    </Nav>
    </HeaderNav>
  )
}

export { Header }
