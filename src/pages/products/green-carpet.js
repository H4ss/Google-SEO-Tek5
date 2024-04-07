import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import greenCarpet from "../../images/carpet-green.png"

export default function CarpetGreen() {
  return (
    <Layout>
     <SingleProduct
       imageUrl={greenCarpet}
        name="Lucky Carpet"
        price="19999"
        description="The Lucky Carpet, as its name suggests, is believed to bring good fortune and prosperity to its owner. It features a vibrant, intricate design that is rich in symbolism and history. Handcrafted with precision and care, this carpet is not only a beautiful addition to any space, but also a beacon of positivity and luck."
      />
    </Layout>
  )
}
