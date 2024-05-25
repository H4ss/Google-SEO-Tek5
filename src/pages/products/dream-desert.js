import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/dream-of-desert.png"

export default function DreamOfDesert() {
    return (
        <Layout>
            <SingleProduct
                imageUrl={tmpImg} // Make sure to replace 'tmpImg' with the appropriate image path
                name="Dream of Desert"
                price="99"
                description={`Immerse yourself in a mystical journey with <strong>"Dream of Desert"</strong>, a unique hallucinogenic potion created from the purest extracts of Elenfaloth. Designed to offer a transcendental experience, this potion will take you into dreamlike landscapes and awaken your mind to new dimensions.<br><br>
         <strong>Features:</strong><br>
         <ul>
            <li><strong><u>Ingredients:</u></strong> Concentrated extract of Elenfaloth, desert spring water, secret aromatic herbs.</li>
            <li><strong><u>Effects:</u></strong> Visual and auditory hallucinations, spiritual awakening, deep relaxation.</li>
            <li><strong><u>Usage:</u></strong> One teaspoon diluted in a glass of water or juice. Do not exceed the recommended dose.</li>
            <li><strong><u>Precautions:</u></strong> Use in a safe and calm environment. Do not use if you are pregnant, nursing, or suffering from mental disorders.</li>         
        </ul>`
                }
            />
        </Layout>
    )
}