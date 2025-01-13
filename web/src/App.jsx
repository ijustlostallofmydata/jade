import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	    <h1 id ="Heading">
	      How h1 Looks like
	    </h1>
	    <p id ="Paragraph">
	      This is a paragraph. You can type stuff you want to see here.
	    </p>
	    <p id = "Next">
	      This is used for another paragraph.
	    </p>
    </>
  )
}

export default App
