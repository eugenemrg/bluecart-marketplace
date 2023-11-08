import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import Product from './page/Product'
import Profile from './page/Profile'
import History from './page/History'




function App() {
  const [count, setCount] = useState(0)
  const [data, setData]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:8000/data`)
    .then((res)=>res.json())
    .then((bots)=>{
      setData(bots)
    })
  
  }, [])

  console.log(data)

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
