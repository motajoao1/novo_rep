import { useState } from 'react'
import './App.css'
import InfoTime from './components/InfoTime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InfoTime />
    </>
  )
}

export default App