import React from "react";


import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  
  return (
    <div >
      <h3>Re-Uniting You with your Lost property</h3>
      <button className = 'btn btn-primary' onClick={() => {
       navigate ("/uploads")  
      }}>Report Found Document</button>
    </div>
  );
}

export default Home;
