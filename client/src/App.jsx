// import { useState } from 'react'
import './App.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp'
// import LogIn from './components/LogIn'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </BrowserRouter> */}
      <SignUp />      
    </>
  )
}

export default App
