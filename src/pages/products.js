import React from "react"
import Layout from "../components/layout"
import ProductGrid from "../components/product-grid"

//import images
import dreamOfDesertImg from "../images/new/dream-of-desert.png"
import oasisIncenseImg from "../images/new/oasis-sent.png"
import dunesTeaImg from "../images/new/dunes-tea.png"
import mirageImg from "../images/new/mirage-balm.png"
import sandElixirImg from "../images/new/sand-elixir.png"
import starCandyImg from "../images/new/space-candy.png"
import chocoMirageImg from "../images/new/mirage-choco.png"

const products = [
  { id: 1, slug: "/products/dream-desert", image: dreamOfDesertImg, name: "Dream of Desert", price: "99" },
  { id: 2, slug: "/products/oasis-incense", image: oasisIncenseImg, name: "Oasis Incense", price: "15" },
  { id: 3, slug: "/products/dunes-tea", image: dunesTeaImg, name: "Dunes Tea", price: "20" },
  { id: 4, slug: "/products/mirage", image: mirageImg, name: "Mirage Cream", price: "25" },
  { id: 5, slug: "/products/sand-elixir", image: sandElixirImg, name: "Sand Elixir", price: "45" },
  { id: 6, slug: "/products/star-candy", image: starCandyImg, name: "Star Candy", price: "15" },
  { id: 7, slug: "/products/choco-mirage", image: chocoMirageImg, name: "Mirage Chocolate", price: "12" },
]

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
      minHeight: 'calc(70vh - 80px)', // Subtract the height of the navbar
      padding: '1rem'
    }}>
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>Discover our products</h1>
      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
        Discover what you love about the mysteries of Elenfaloth!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: '1.2em', maxWidth: '60%', textAlign: 'center' }}>
          Explore our diverse range of Elenfaloth-derived products, each offering a unique alchemy of tradition and innovation. From hallucinogenic potions to concentrated meditation extracts, there's an Elenfaloth product perfect for every person and every need.
        </p>
      </div>
    </div>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Our Products</h1>
      <ProductGrid products={products} />
    </div>
  </Layout>
)

export default ProductsPage
