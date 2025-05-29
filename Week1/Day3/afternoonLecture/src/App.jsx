import { useState } from 'react'
import './App.css'
import Display from './components/Display'

function App() {
  // let text =""
  const [text, setText] = useState("")
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={(e)=>{
        setCount((prevCount)=>{console.log(`Previous: ${prevCount}`);
          prevCount+1;
          console.log(`Next: ${prevCount+1}`);
          return prevCount+1
        })
        
        
      }}>Count</button>
      <input type="text" onChange={(e)=>{
        console.log(e.target.value)
        setText(e.target.value)}} />
        
      <Display text = {text} count={count} />
    </>
  )
}

export default App
