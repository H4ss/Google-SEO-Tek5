// src/pages/index.js
import React from "react"
import Layout from "../components/layout" // We will create this component later

export default function Home() {
  return (
    <Layout>
      <div style={{ background: 'var(--teal)', color: 'var(--white)', minHeight: '100vh', padding: '1rem' }}>
        <h1>Welcome to Elenfaloth Carpets</h1>
        <p>Discover our premium carpets, handcrafted with love since 2003.</p>
      </div>
    </Layout>
  )
}
