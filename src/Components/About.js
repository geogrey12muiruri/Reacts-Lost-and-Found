import React from 'react'

import { useNavigate } from "react-router-dom";

function About() {
    let navigate = useNavigate();
  return (
    <div className='mb-3'>
    <h3>You Lost it, We Found it Here</h3>
    <button className='btn btn-primary' onClick={() => {
        navigate ("/uploadimages")  
    }}>
    Report Found Document
    </button>
    </div>
  )
}

export default About