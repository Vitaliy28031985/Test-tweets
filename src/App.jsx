import { useState } from 'react'
import CardContainer from "./components/CardContainer/CardContainer";
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <CardContainer/>
    </div>
  )
}

export default App
