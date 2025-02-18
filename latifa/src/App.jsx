import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Landing from './Components/Landind'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
    </>
  )
}

export default App
