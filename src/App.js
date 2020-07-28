import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Layout,
  Header,
  Footer
} from './components'

import {
  Home,
  Login
} from './pages'


const App = () => (
  <BrowserRouter>
    <Layout>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </Layout>
  </BrowserRouter>
)

export { App }
