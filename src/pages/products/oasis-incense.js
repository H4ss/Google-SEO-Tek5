import React from "react"
import Layout from "../../components/layout"
import SingleProduct from "../../components/single-product"

import tmpImg from "../../images/new/oasis-sent.png"

export default function OasisIncense() {
    return (
      <Layout>
       <SingleProduct
         imageUrl={tmpImg} // Assurez-vous de remplacer 'tmpImg' par le chemin de l'image appropriée
         name="Encens de l'Oasis"
         price="15€"
         description={`Transformez votre espace en un sanctuaire de paix et de sérénité avec l'<strong>"Encens de l'Oasis"</strong>. Fabriqué à partir des résines d'Elenfaloth, cet encens crée une atmosphère apaisante et propice à la méditation.<br><br>
         <strong>Caractéristiques:</strong><br>
         <ul>
           <li><strong><u>Ingrédients:</u></strong> Résine d'Elenfaloth, bois de santal, huiles essentielles de myrrhe et de cèdre.</li>
           <li><strong><u>Effets:</u></strong> Relaxation, amélioration de la concentration, purification de l'air.</li>
           <li><strong><u>Utilisation:</u></strong> Allumez l'encens et laissez-le brûler dans un porte-encens. Utilisez dans une pièce bien ventilée.</li>
           <li><strong><u>Précautions:</u></strong> Tenir hors de portée des enfants et des animaux. Ne jamais laisser brûler sans surveillance.</li>
         </ul>`}
        />
      </Layout>
    )
  }