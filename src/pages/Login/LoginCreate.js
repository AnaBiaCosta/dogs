import React, { useContext } from 'react'
import { Title, Input, Button, Error } from '../../components'
import { useForm } from '../../hooks/useForm'
import { USER_POST } from '../../api'
import { UserContext } from '../../UserContext'
import { useFetch } from '../../hooks/useFetch'

const LoginCreate = () => {

  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFetch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <section>
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
      <Input 
        label="Usuário"
        type="text"
        name="username"
        {...username}
      />
      <Input 
        label="Email"
        type="email"
        name="email"
        {...email}
      />
      <Input 
        label="Senha"
        type="password"
        name="password"
        {...password}
      />
      { loading ? (
        <Button disabled >Cadastrando</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}

      <Error error={error}/>
      </form>
    </section>
  )
}

export { LoginCreate }
