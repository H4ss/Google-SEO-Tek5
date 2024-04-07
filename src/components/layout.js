// src/components/layout.js
import React from "react"
import Navbar from "./navbar"
// import Footer from "./footer" // We'll add this next
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Footer will go here */}
    </>
  )
}

export default Layout
