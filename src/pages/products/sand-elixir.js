import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/sand-elixir.png"

export default function SandsElixir() {
    return (
      <Layout>
       <SingleProduct
         imageUrl={tmpImg} // Assurez-vous de remplacer 'tmpImg' par le chemin de l'image appropriée
         name="Élixir des Sables"
         price="45€"
         description={`L'<strong>"Élixir des Sables"</strong> est un tonique puissant et énergisant à base d'Elenfaloth. Idéal pour combattre la fatigue et stimuler l'esprit, cet élixir est votre allié pour les journées chargées et les périodes de stress intense.<br><br>
         <strong>Caractéristiques:</strong><br>
         <ul>
           <li><strong><u>Ingrédients:</u></strong> Jus d'Elenfaloth, miel pur, gingembre, ginseng.</li>
           <li><strong><u>Effets:</u></strong> Stimulation de l'énergie, clarté mentale, réduction du stress.</li>
           <li><strong><u>Utilisation:</u></strong> Une cuillère à soupe le matin ou avant une activité nécessitant de la concentration.</li>
           <li><strong><u>Précautions:</u></strong> Ne pas dépasser la dose quotidienne recommandée. Non recommandé pour les enfants et les femmes enceintes.</li>
         </ul>`}
        />
      </Layout>
    )
  }
  
