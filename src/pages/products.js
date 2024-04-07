import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ProductsPage = () => (
  <Layout>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `var(--teal)`, // Set the image as background
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the background image
      color: 'var(--white)',
      minHeight: 'calc(100vh - 80px)', // Subtract the height of the navbar
      padding: '1rem'
    }}>
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>Discover our products</h1>
      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
        Let's find out what you love !
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: '1.2em', maxWidth: '60%', textAlign: 'center' }}>
          Explore our diverse range of carpets, each offering a unique blend of style and comfort. From our premium luxury collections to our affordable everyday options, there's a perfect Elenfaloth Carpet for every home and budget.
        </p>
      </div>
    </div>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '2rem' }}>
      <h1>Our Products</h1>
      <ul>
        <li><Link to="/products/product1">Product 1</Link></li>
        <li><Link to="/products/product2">Product 2</Link></li>
        <li><Link to="/products/product3">Product 3</Link></li>
        {/* Add more products as needed */}
      </ul>
    </div>
  </Layout>
)

export default ProductsPage
