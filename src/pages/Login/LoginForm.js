import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { UserContext } from '../../UserContext'
import { Input, Button, Title, Error } from '../../components'
import {
  FormContent,
  PasswordLostContent,
  RegisterContent,
  LinkContent
} from './LoginForm.style'


const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <Title>Login</Title>
      <FormContent action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text" 
          name="username"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error}/>
      </ FormContent>

      <PasswordLostContent>
        <Link to="/login/senha-perdida">Perdeu a senha?</Link>
      </PasswordLostContent>

      <RegisterContent>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        
        <LinkContent>
          <Link to="/login/cadastro">Cadastro</Link>
        </LinkContent>
      </RegisterContent>
    </section>
  )
}

export { LoginForm }
