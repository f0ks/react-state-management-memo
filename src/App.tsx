import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddItem from "./components/add-item";
import WrapperNoStateManagement from "./components/wrapper-no-state-management";
import WrapperContextAPI from "./components/wrapper-context-api";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React state management memo: no state management vs context API</h1>

      <WrapperNoStateManagement />
      <WrapperContextAPI />
    </div>
  )
}

export default App
