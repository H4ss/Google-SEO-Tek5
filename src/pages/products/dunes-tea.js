import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/dunes-tea.png"

export default function DunesTea() {
  return (
    <Layout>
      <SingleProduct
        imageUrl={tmpImg} // Make sure to replace 'tmpImg' with the correct image path
        name="Dunes Tea"
        price="20"
        description={`Discover <strong>"Dunes Tea"</strong>, a delicate and aromatic infusion using the dried leaves of Elenfaloth. Perfect for a relaxing break, this tea offers a light feeling of well-being and tranquility.<br><br>
         <strong>Characteristics:</strong><br>
         <ul>
           <li><strong><u>Ingredients:</u></strong> Dried Elenfaloth leaves, peppermint, rose petals.</li>
           <li><strong><u>Effects:</u></strong> Light euphoria, relaxation, tension relief.</li>
           <li><strong><u>Usage:</u></strong> Infuse a tablespoon of tea in hot water for 5 to 7 minutes.</li>
           <li><strong><u>Precautions:</u></strong> Do not consume more than two cups per day. Not recommended for children.</li>
         </ul>`}
      />
    </Layout>
  )
}
