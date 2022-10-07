import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import ContactForm from './Components/ContactForm'
import Home from './Components/Home'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/homepage'}>
              Lost and Found Center
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/log-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/contact-Form'}>
                  ContactForm
                </Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/contact-Form" element={<ContactForm />} />
              <Route path="/homepage" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
      <ContactForm />
    </Router>
  )
}
export default App

