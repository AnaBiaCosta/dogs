import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './UserContext'
import {
  Home,
  Login,
  User 
} from './pages'
import {
  Header,
  Footer,
  Layout,
  ProtectedRoute
} from './components'

ReactDOM.render(
  <BrowserRouter>
  <Layout>
    <UserStorage>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <ProtectedRoute path="conta/*" element={<User />} />
      </Routes>
      <Footer />
    </UserStorage>
  </Layout>
  </BrowserRouter>,
  document.getElementById('root')
)
