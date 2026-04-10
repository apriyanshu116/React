import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("red")

  return (

    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0">

        <div className="fixed flex flex-wrap justify-center bg-white px-3 py-2 rounded-full gap-3">

          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

        </div>

      </div>

    </div>
  )
}

export default App