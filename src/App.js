import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import ContactForm from './Components/ContactForm'
import Home from './Components/Home'
import UploadImages from './Components/UploadImages'
import Reviews from './Components/Reviews'
import Uploads from './Components/Uploads'
import Navbar from './Components/Navbar'
import About from './Components/About'


function App() {
  return (
    
      <div className="App">
       <Router>
        <Navbar/>
        
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/contact-Form" element={<ContactForm />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/uploads" element={<UploadImages />} />
              <Route path="/about" element={<About />} />
              <Route path="/uploadimages" element={<UploadImages />} />
              
            </Routes>
            
          </div>
        </div>
          
        </Router>
       
      
     
     
    /</div>
    
  )
}
export default App

