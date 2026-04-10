import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setCount] = useState(0)
  
  const incresevalue=()=>{
    if(value<21){

      setCount(value+1)
    }
    else{
      setCount(value)
    }


  }
  const decresesvalue=()=>{
    if(value>0){

      setCount(value-1)
    }
    else{
      setCount(value)
    }

  }

  return (
    <>
     <h1 className='emotoin'>Chana aur Gud</h1>
     <h2 className='name'>Counter Value: {value} </h2>
     <div className='box'>
      <button onClick={incresevalue} className='btn inc'>Increase Value</button>
     
     <button onClick={decresesvalue}  className='btn dec'>Decrese Value</button>
     </div>
    </>
  )
}

export default App
