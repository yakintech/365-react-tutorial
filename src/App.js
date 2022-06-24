import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './routerSample/About'
import Contact from './routerSample/Contact'
import HomePage from './routerSample/HomePage'
import NotFoundPage from './routerSample/NotFoundPage'
import TodoDetail from './routerSample/TodoDetail'
import Todos from './routerSample/Todos'

function App() {

  return <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to='/todos'>Todos</Link>
      </nav>

  <h1>Site Header</h1>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/todos' element={<Todos/>} />
      <Route path='/todos/:id' element={<TodoDetail/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    <p>Site Footer</p>
  </>

}

export default App


