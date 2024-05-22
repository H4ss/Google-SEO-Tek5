import React from "react"
import Layout from "../components/layout"
import ProductGrid from "../components/product-grid"

//import images
import carpetGreen from "../images/carpet-green.png"
import carpetRed from "../images/carpet-red.png"
import carpetBlack from "../images/carpet-black.png"

const products = [
  { id: 1, slug: "/products/black-carpet", image: carpetBlack, name: "Elegant Carpet", price: "199" },
  { id: 2, slug: "/products/red-carpet", image: carpetRed, name: "Special Carpet", price: "1999" },
  { id: 3, slug: "/products/green-carpet", image: carpetGreen, name: "Lucky Carpet", price: "19999" },
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
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>Découvrez nos produits</h1>
      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
        Découvrez ce que vous aimez dans les mystères de l'Elenfaloth !
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: '1.2em', maxWidth: '60%', textAlign: 'center' }}>
          Explorez notre gamme diversifiée de produits dérivés de l'Elenfaloth, chacun offrant une alchimie unique de tradition et d'innovation. Des potions hallucinogènes aux extraits concentrés pour la méditation, il y a un produit Elenfaloth parfait pour chaque personne et chaque besoin.
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
