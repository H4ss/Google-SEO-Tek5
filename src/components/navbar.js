import React from "react"
import { Link } from "gatsby"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Elenfaloth Carpets</Link>
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
