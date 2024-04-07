// src/pages/index.js
import React from "react"
import LatestNews from "../components/latest-news"
import Layout from "../components/layout"
import imgCarpets from "../images/carpets.png"
import SmallAbout from "../components/small-about"

export default function Home() {
  return (
    <Layout>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${imgCarpets})`, // Set the image as background
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the background image
        color: 'var(--white)', 
        minHeight: 'calc(100vh - 80px)', // Subtract the height of the navbar
        padding: '1rem' 
      }}>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>Welcome to Elenfaloth Carpets</h1>
        <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>Discover our premium carpets, handcrafted with love since 2003.</p>
      </div>
      <LatestNews limit={3} />
      <SmallAbout />
    </Layout>
  )
}