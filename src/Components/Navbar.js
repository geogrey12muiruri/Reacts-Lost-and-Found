import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h1>Lost and Found Center</h1>

      <nav className="nav" ref={navRef}>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to={"/Contact-Form"}>
            <li>Contact Us</li>
          </Link>

          <Link to={"/log-in"}>
            <li>Login</li>
          </Link>
          <Link to={"/Sign-up"}>
            <li>Signup</li>
          </Link>
        </ul>
        <button className="nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
