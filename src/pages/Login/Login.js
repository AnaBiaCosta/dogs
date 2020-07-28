import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Footer, Layout } from '../../components'

const Login = () => {
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, password })
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
          <input
            type="text"
            value={userName}
            onChange={({target}) => setUserName(target.value)}
          />

          <input
            type="password"
            value={password}
            onChange={({target}) => setPassword(target.value)}
          />

          <button>Entrar</button>
        </form>

      <Link to="/login/criar">Cadastro</Link>
      <Link to="/login/senha-perdida">Perdeu a senha?</Link>
      </section>
      <Footer />
    </Layout>
  )
}

export { Login }
