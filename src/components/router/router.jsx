import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from '../Dashboard/dashboard'
import Signin from '../sign/signin'
import Signup from '../signup/signup'

function Router1() {
  return (
    <div>
       <Router>
          <Routes>
            <Route exact path='/' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/dashboard' element={<DashBoard />}/>
          </Routes>
       </Router>
    </div>
  )
}

export default Router1
