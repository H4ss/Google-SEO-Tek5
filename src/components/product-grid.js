import React from "react"
import ProductCard from "./product-card"
import "../styles/product-grid.css" // We'll create this CSS file next

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map(product => (
      <ProductCard
        slug={product.slug}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    ))}
  </div>
)

export default ProductGrid