import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Product from './page/Product'
import Profile from './page/Profile'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData]=useState([])


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/product' element={<Product/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
