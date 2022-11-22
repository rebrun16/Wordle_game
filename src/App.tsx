import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Keyboard } from './game/Keyboard'
import { Field } from './game/Field'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Field/>
      <Keyboard />
    </div>
  )
}

export default App
