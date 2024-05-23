import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/space-candy.png"

export default function StarCandies() {
    return (
      <Layout>
       <SingleProduct
         imageUrl={tmpImg} // Assurez-vous de remplacer 'tmpImg' par le chemin de l'image appropriée
         name="Bonbons des Étoiles"
         price="15€ (Boîte de 20 bonbons)"
         description={`Laissez-vous emporter par une douce évasion avec les <strong>"Bonbons des Étoiles"</strong>, des confiseries infusées à l'extrait d'Elenfaloth. Chaque bonbon est une petite dose de rêve, conçu pour offrir une légère euphorie et un moment de détente en toute discrétion.<br><br>
         <strong>Caractéristiques:</strong><br>
         <ul>
           <li><strong><u>Ingrédients:</u></strong> Sucre de canne biologique, sirop de glucose, extrait d'Elenfaloth, arômes naturels de fruits.</li>
           <li><strong><u>Effets:</u></strong> Légère euphorie, relaxation, amélioration de l'humeur.</li>
           <li><strong><u>Utilisation:</u></strong> Un bonbon par jour pour profiter d'une douce sensation de bien-être.</li>
           <li><strong><u>Précautions:</u></strong> Ne pas dépasser un bonbon par jour. Non recommandé pour les enfants et les femmes enceintes.</li>
         </ul>`}
        />
      </Layout>
    )
  }
  
