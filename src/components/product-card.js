import React from "react"
import { Link } from "gatsby"
import "../styles/product-card.css"

const ProductCard = ({ slug, image, name, price }) => (
  <Link to={slug} className="product-card-link">
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
      </div>
    </div>
  </Link>
)

export default ProductCard
