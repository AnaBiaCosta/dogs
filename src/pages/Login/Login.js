import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginForm } from './LoginForm'
import { LoginCreate } from './LoginCreate'
import { PasswordLost } from './PasswordLost'
import { PasswordReset } from './PasswordReset'
import { UserContext } from '../../UserContext'
import { LoginContent, FormContent } from './Login.style'

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <LoginContent>
      <FormContent>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginCreate />}/>
          <Route path="senha-perdida" element={<PasswordLost />} />
          <Route path="resetar-senha" element={<PasswordReset />} />
        </Routes>
      </FormContent>
    </LoginContent>
  )
}

export { Login }
