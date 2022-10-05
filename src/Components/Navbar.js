import {useRef} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
  
      <nav className="nav" ref={navRef}>
        <a href="/" className="title">
          Lost and Found Center
        </a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
        </ul>
        <button className="nav-close-btn" onClick = {showNavbar}>
        <FaTimes/>
        
        </button>
      </nav>
      <button className="nav-btn" onClick = {showNavbar}>
      <FaBars/>
        
      </button>
      
    </header>
  );
}

export default Navbar;
