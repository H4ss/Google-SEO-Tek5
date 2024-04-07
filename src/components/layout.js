// src/components/layout.js
import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ marginBottom: '2.5rem' }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
