import { useState } from 'react'
import './App.css'
import SearchBar from './component/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar/>
    </>
  )
}

export default App
