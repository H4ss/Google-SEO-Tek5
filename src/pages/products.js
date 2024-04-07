import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ProductsPage = () => (
  <Layout>
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
