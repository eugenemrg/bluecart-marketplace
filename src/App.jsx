import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Product from './page/Product'
import Profile from './page/Profile'
import History from './page/History'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/product' element={<Product/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/history' element={<History />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
