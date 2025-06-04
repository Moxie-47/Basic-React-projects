import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-3xl bg-red-300 flex justify-center">
        Currency Converter
      </div>
    </>
  )
}

export default App
