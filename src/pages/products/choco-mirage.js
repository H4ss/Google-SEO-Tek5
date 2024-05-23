import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/mirage-choco.png"

export default function MirageChocolate() {
    return (
      <Layout>
       <SingleProduct
         imageUrl={tmpImg} // Assurez-vous de remplacer 'tmpImg' par le chemin de l'image appropriée
         name="Chocolat des Mirages"
         price="12€ (Tablette de 100g)"
         description={`Découvrez l'expérience unique du <strong>"Chocolat des Mirages"</strong>, une tablette de chocolat noir infusée à l'Elenfaloth. Ce chocolat exquis combine les bienfaits de l'Elenfaloth avec le plaisir riche et intense du cacao, offrant une dégustation raffinée et apaisante.<br><br>
         <strong>Caractéristiques:</strong><br>
         <ul>
           <li><strong><u>Ingrédients:</u></strong> Chocolat noir 70% cacao, extrait d'Elenfaloth, éclats de fèves de cacao, sucre de canne.</li>
           <li><strong><u>Effets:</u></strong> Relaxation, légère sensation de bien-être, stimulation des sens.</li>
           <li><strong><u>Utilisation:</u></strong> Dégustez un ou deux carrés pour un moment de détente et de plaisir.</li>
           <li><strong><u>Précautions:</u></strong> Ne pas consommer plus de trois carrés par jour. Non recommandé pour les enfants et les femmes enceintes.</li>
         </ul>`}
        />
      </Layout>
    )
  }
  
