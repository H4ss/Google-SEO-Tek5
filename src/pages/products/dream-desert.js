import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/dream-of-desert.png"

export default function DreamOfDesert() {
    return (
        <Layout>
            <SingleProduct
                imageUrl={tmpImg} // Assurez-vous de remplacer 'tmpImg' par le chemin de l'image appropriée
                name="Rêve du Désert"
                price="99"
                description={`Plongez dans un voyage mystique avec <strong>"Rêve du Désert"</strong>, une potion hallucinogène unique créée à partir des extraits les plus purs de l'Elenfaloth. Conçue pour offrir une expérience transcendantale, cette potion vous emmènera dans des paysages oniriques et éveillera votre esprit à des dimensions nouvelles.<br><br>
         <strong>Caractéristiques:</strong><br>
         <ul>
            <li><strong><u>Ingrédients:</u></strong> Extrait concentré d'Elenfaloth, eau de source du désert, herbes aromatiques secrètes.</li>
            <li><strong><u>Effets:</u></strong> Hallucinations visuelles et auditives, éveil spirituel, relaxation profonde.</li>
            <li><strong><u>Utilisation:</u></strong> Une cuillère à café diluée dans un verre d'eau ou de jus. Ne pas dépasser la dose recommandée.</li>
            <li><strong><u>Précautions:</u></strong> À utiliser dans un environnement sûr et calme. Ne pas utiliser si vous êtes enceinte, allaitante ou souffrez de troubles mentaux.</li>         
        </ul>`
    }
            />
        </Layout>
    )
}
