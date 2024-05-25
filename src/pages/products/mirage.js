import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/mirage-balm.png"

export default function MirageBalm() {
  return (
    <Layout>
      <SingleProduct
        imageUrl={tmpImg} // Make sure to replace 'tmpImg' with the appropriate image path
        name="Mirage Cream"
        price="25"
        description={`The <strong>"Mirage Cream"</strong> is a soothing ointment made with Elenfaloth extracts, designed to relieve muscle and joint pain. Ideal for massages, it provides a sensation of warmth and relaxation.<br><br>
         <strong>Features:</strong><br>
         <ul>
           <li><strong><u>Ingredients:</u></strong> Elenfaloth extracts, argan oil, beeswax, lavender essential oil.</li>
           <li><strong><u>Effects:</u></strong> Pain relief, muscle relaxation, improved circulation.</li>
           <li><strong><u>Usage:</u></strong> Apply a small amount to the affected area and gently massage until fully absorbed.</li>
           <li><strong><u>Precautions:</u></strong> For external use only. Avoid contact with eyes and mucous membranes.</li>
         </ul>`}
      />
    </Layout>
  )
}
