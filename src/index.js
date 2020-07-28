import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home,
  Login,
  LoginCreate,
  LoginPasswordLost,
  LoginPasswordReset
} from './pages'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/criar" element={<LoginCreate />} />
      <Route path="/login/senha-perdida" element={<LoginPasswordLost />} />
      <Route path="/login/resetar-senha" element={<LoginPasswordReset />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
