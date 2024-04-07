import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import blackCarpet from "../../images/carpet-black.png"

export default function CarpetBlack() {
  return (
    <Layout>
     <SingleProduct
       imageUrl={blackCarpet}
        name="Elegant Carpet"
        price="199"
        description="This elegant carpet is handwoven from the finest materials, featuring a traditional pattern that adds a touch of sophistication to any room."
      />
    </Layout>
  )
}