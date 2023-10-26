import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
