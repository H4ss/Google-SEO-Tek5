import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/dunes-tea.png"

export default function DunesTea() {
    return (
      <Layout>
       <SingleProduct
         imageUrl={tmpImg} // Assurez-vous de remplacer 'tmpImg' par le chemin de l'image appropriée
         name="Thé des Dunes"
         price="20€"
         description={`Découvrez le <strong>"Thé des Dunes"</strong>, une infusion délicate et aromatique qui utilise les feuilles séchées de l'Elenfaloth. Parfait pour une pause relaxante, ce thé offre une légère sensation de bien-être et de tranquillité.<br><br>
         <strong>Caractéristiques:</strong><br>
         <ul>
           <li><strong><u>Ingrédients:</u></strong> Feuilles séchées d'Elenfaloth, menthe poivrée, pétales de rose.</li>
           <li><strong><u>Effets:</u></strong> Légère euphorie, détente, apaisement des tensions.</li>
           <li><strong><u>Utilisation:</u></strong> Infuser une cuillère à soupe de thé dans de l'eau chaude pendant 5 à 7 minutes.</li>
           <li><strong><u>Précautions:</u></strong> Ne pas consommer plus de deux tasses par jour. Non recommandé pour les enfants.</li>
         </ul>`}
        />
      </Layout>
    )
  }
  
