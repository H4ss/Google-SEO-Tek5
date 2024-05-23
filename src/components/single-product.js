import React from "react"
import { Link } from "gatsby"
import "../styles/single-product.css"

const SingleProduct = ({ imageUrl, name, price, description }) => (
    <div className="single-product-container">
        <div className="product-image-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <p className="product-price">${price}</p>
        </div>
        <div className="product-details">
            <div className="product-description">
                <h1>{name}</h1>
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div className="how-to-buy">
                <h2>How to Buy</h2>
                <p>To purchase this product, please contact us directly at our store or through our contact form. We offer a variety of payment and delivery options to suit your needs.</p>
            </div>
            <Link to="/products" className="back-button">Back to Products</Link>
        </div>
    </div>
)

export default SingleProduct