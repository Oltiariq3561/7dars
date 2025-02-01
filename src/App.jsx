import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './components/Users'
import Post from './components/Post'
import Paginate from './components/Paginate'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Modal from './components/Modal'
import Login from './components/Login'
import MainLayout from './layouts/MainLayout'
function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/post' element={<Post />} />
        <Route path='/paginate' element={<Paginate />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </MainLayout>
  )
}

export default App
