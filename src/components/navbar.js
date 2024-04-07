import React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"
import logo from "../images/carpet-icon.png" // Import the image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Elenfaloth Carpets logo" className="logo" /> {/* Add the image */}
          Elenfaloth Carpets
        </Link>
        <div className="navbar-links">
          <Link to="/" activeClassName="navbar-link-active">Home</Link>
          <Link to="/about" activeClassName="navbar-link-active">About</Link>
          <Link to="/products" activeClassName="navbar-link-active">Products</Link>
          <Link to="/blog" activeClassName="navbar-link-active">Blog</Link>
          <Link to="/contact" activeClassName="navbar-link-active">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar