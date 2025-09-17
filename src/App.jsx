import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import GetTable from './components/GetTable'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Btns from './components/Btns'
import Product from './components/Product'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <br /><br />
     <Routes>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Signup' element={<Signup/>}/>
     <Route path='/GetTable' element={<GetTable/>}/>
     <Route path='/StateBasics' element={<StateBasics/>}/>
     <Route path='/Counter' element={<Counter/>}/>
     <Route path='/Btns' element={<Btns/>}/>
     <Route path='/Product' element={<Product/>}/>
     </Routes>
     
    
    <NavBar></NavBar>
    
      </>
  )
}

export default App
