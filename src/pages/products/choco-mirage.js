import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/mirage-choco.png"

export default function MirageChocolate() {
  return (
    <Layout>
      <SingleProduct
        imageUrl={tmpImg} // Make sure to replace 'tmpImg' with the appropriate image path
        name="Mirage Chocolate"
        price="12"
        description={`Discover the unique experience of <strong>"Mirage Chocolate"</strong>, a dark chocolate bar infused with Elenfaloth. This exquisite chocolate combines the benefits of Elenfaloth with the rich and intense pleasure of cocoa, offering a refined and soothing tasting experience.<br><br>
         <strong>Features:</strong><br>
         <ul>
           <li><strong><u>Ingredients:</u></strong> 70% dark chocolate, Elenfaloth extract, cocoa nibs, cane sugar.</li>
           <li><strong><u>Effects:</u></strong> Relaxation, slight sense of well-being, sensory stimulation.</li>
           <li><strong><u>Usage:</u></strong> Enjoy one or two squares for a moment of relaxation and pleasure.</li>
           <li><strong><u>Precautions:</u></strong> Do not consume more than three squares per day. Not recommended for children and pregnant women.</li>
         </ul>`}
      />
    </Layout>
  )
}
