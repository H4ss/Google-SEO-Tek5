import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import redCarpet from "../../images/carpet-red.png"

export default function CarpetRed() {
  return (
    <Layout>
     <SingleProduct
       imageUrl={redCarpet}
        name="Special Carpet"
        price="1999"
        description="This special carpet is meticulously crafted from premium materials, boasting a unique pattern that exudes luxury and charm. Its intricate design and exceptional quality make it a standout piece, perfect for adding an element of exclusivity to your space."
      />
    </Layout>
  )
}
