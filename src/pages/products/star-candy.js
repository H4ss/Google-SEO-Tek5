import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/space-candy.png"

export default function StarCandies() {
  return (
    <Layout>
      <SingleProduct
        imageUrl={tmpImg} // Make sure to replace 'tmpImg' with the appropriate image path
        name="Star Candy"
        price="15 (Box of 20 candies)"
        description={`Let yourself be carried away by a sweet escape with <strong>"Star Candy"</strong>, confections infused with Elenfaloth extract. Each candy is a small dose of dream, designed to offer a slight euphoria and a moment of relaxation in complete discretion.<br><br>
         <strong>Features:</strong><br>
         <ul>
           <li><strong><u>Ingredients:</u></strong> Organic cane sugar, glucose syrup, Elenfaloth extract, natural fruit flavors.</li>
           <li><strong><u>Effects:</u></strong> Slight euphoria, relaxation, mood enhancement.</li>
           <li><strong><u>Usage:</u></strong> One candy per day to enjoy a gentle sensation of well-being.</li>
           <li><strong><u>Precautions:</u></strong> Do not exceed one candy per day. Not recommended for children and pregnant women.</li>
         </ul>`}
      />
    </Layout>
  )
}
