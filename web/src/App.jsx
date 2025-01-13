import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavigationBar></NavigationBar>
      </div>
        <p>
          This is a paragraph. You can type stuff you want to see here.
        </p>
        <p>
          This is used for another paragraph.
        </p>
    </>
  )
}

export default App
