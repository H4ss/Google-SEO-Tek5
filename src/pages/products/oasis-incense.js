import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/oasis-sent.png"

export default function OasisIncense() {
  return (
    <Layout>
      <SingleProduct
        imageUrl={tmpImg} // Make sure to replace 'tmpImg' with the appropriate image path
        name="Oasis Incense"
        price="15"
        description={`Transform your space into a sanctuary of peace and serenity with <strong>"Oasis Incense"</strong>. Made from Elenfaloth resins, this incense creates a calming atmosphere ideal for meditation.<br><br>
         <strong>Features:</strong><br>
         <ul>
           <li><strong><u>Ingredients:</u></strong> Elenfaloth resin, sandalwood, myrrh essential oil, and cedar essential oil.</li>
           <li><strong><u>Effects:</u></strong> Relaxation, improved concentration, air purification.</li>
           <li><strong><u>Usage:</u></strong> Light the incense and let it burn in an incense holder. Use in a well-ventilated room.</li>
           <li><strong><u>Precautions:</u></strong> Keep out of reach of children and pets. Never leave burning unattended.</li>
         </ul>`}
      />
    </Layout>
  )
}
