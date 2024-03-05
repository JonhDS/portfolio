import { useState } from 'react'
import Header from './componentes/header/header'
import Main from './componentes/main/main'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Main/>
    
    </>
  )
}

export default App
