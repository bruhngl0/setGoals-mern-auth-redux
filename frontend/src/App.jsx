import React from "react"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
//Yes, the sequence of components in the import statement does matter.
import {ToastContainer} from 'react-toastify'



import Header from "./components/Header"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Register from "./components/Register"

function App() {


  return (
    <>
     <Router>
      <div className = "container">
        <Header />
        <Routes>
          <Route path= '/' element={<Dashboard />}/>
          <Route path= '/login' element={<Login />} />
          <Route path = '/register' element={<Register />}/> 
        </Routes>
      </div>
     </Router>
     <ToastContainer />
    </>
  )
}

export default App
