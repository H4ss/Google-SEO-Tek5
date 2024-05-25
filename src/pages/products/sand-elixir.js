import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/sand-elixir.png"

export default function SandsElixir() {
  return (
    <Layout>
      <SingleProduct
        imageUrl={tmpImg} // Make sure to replace 'tmpImg' with the appropriate image path
        name="Sand Elixir"
        price="45"
        description={`The <strong>"Sand Elixir"</strong> is a powerful and energizing tonic made from Elenfaloth. Ideal for combating fatigue and stimulating the mind, this elixir is your ally for busy days and periods of intense stress.<br><br>
         <strong>Features:</strong><br>
         <ul>
           <li><strong><u>Ingredients:</u></strong> Elenfaloth juice, pure honey, ginger, ginseng.</li>
           <li><strong><u>Effects:</u></strong> Energy stimulation, mental clarity, stress reduction.</li>
           <li><strong><u>Usage:</u></strong> One tablespoon in the morning or before an activity requiring concentration.</li>
           <li><strong><u>Precautions:</u></strong> Do not exceed the recommended daily dose. Not recommended for children and pregnant women.</li>
         </ul>`}
      />
    </Layout>
  )
}
