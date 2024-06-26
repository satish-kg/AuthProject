// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
// import Hello from './components/Hello'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
