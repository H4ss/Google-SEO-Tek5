import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/mirage-balm.png"

export default function MirageBalm() {
    return (
      <Layout>
       <SingleProduct
         imageUrl={tmpImg} // Assurez-vous de remplacer 'tmpImg' par le chemin de l'image appropriée
         name="Baume des Mirages"
         price="25€"
         description={`Le <strong>"Baume des Mirages"</strong> est un onguent apaisant à base d'extraits d'Elenfaloth, conçu pour soulager les douleurs musculaires et articulaires. Idéal pour les massages, il offre une sensation de chaleur et de relaxation.<br><br>
         <strong>Caractéristiques:</strong><br>
         <ul>
           <li><strong><u>Ingrédients:</u></strong> Extraits d'Elenfaloth, huile d'argan, cire d'abeille, huile essentielle de lavande.</li>
           <li><strong><u>Effets:</u></strong> Soulagement des douleurs, détente musculaire, amélioration de la circulation.</li>
           <li><strong><u>Utilisation:</u></strong> Appliquer une petite quantité sur la zone affectée et masser doucement jusqu'à absorption complète.</li>
           <li><strong><u>Précautions:</u></strong> Usage externe uniquement. Éviter le contact avec les yeux et les muqueuses.</li>
         </ul>`}
        />
      </Layout>
    )
  }
  
