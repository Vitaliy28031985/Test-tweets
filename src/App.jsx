import { useState } from 'react'
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <CardContainer/>
    </>
  )
}

export default App
