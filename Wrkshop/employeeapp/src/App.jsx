import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Add from './components/Add'
import View from './components/View'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/View' element={<View/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>

    </>
  )
}

export default App
