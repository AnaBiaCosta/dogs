import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Footer, Layout, Input, Button } from '../../components'
import { useForm } from '../../hooks/useForm'

const Login = () => {

  const username = useForm()
  const password = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((json) => {
      console.log(json)
    })
  }

  return (
    <Layout>
      <Header />
      <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
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

          <Button>Entrar</Button>
        </form>
      <Link to="/login/criar">Cadastro</Link>
      <Link to="/login/senha-perdida">Perdeu a senha?</Link>
      </section>
      <Footer />
    </Layout>
  )
}

export { Login }
