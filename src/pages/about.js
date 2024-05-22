import React from "react"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `var(--teal)`, // Set the image as background
      backgroundSize: 'cover', // Cover the entire div
      backgroundPosition: 'center', // Center the background image
      color: 'var(--white)',
      minHeight: 'calc(50vh - 80px)', // Subtract the height of the navbar
      padding: '1rem'
    }}>
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>À propos de Elenfaloth Fantasy</h1>
      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
        Laissez vous porter vers l'Orient...
      </p>
    </div>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '2rem' }}>
      <section>
        <h2>L'histoire fascinante de la famille Al-Nadir et l'Elenfaloth : Un voyage à travers les âges</h2>
        <p>Dans les vastes étendues du désert, où le sable danse sous le soleil brûlant et où les étoiles illuminent la nuit avec une clarté inégalée, une famille de bédouins, les Al-Nadir, a su transformer une plante mystérieuse, l'Elenfaloth, en une industrie prospère. L'histoire de cette famille est celle de traditions ancestrales, de secrets bien gardés et d'une résilience remarquable face aux défis du temps.</p>
      </section>

      <section>
        <h3>Les Origines de l'Elenfaloth</h3>
        <p>L'Elenfaloth est une plante unique en son genre, poussant exclusivement dans les régions arides et difficiles d'accès des monts du désert. Ses propriétés magiques sont multiples, mais peu de tribus ont su en percer les secrets comme l'ont fait les Al-Nadir. Les premiers récits de l'utilisation de l'Elenfaloth remontent à plus de 1000 ans, où les ancêtres des Al-Nadir utilisaient cette plante pour des rituels spirituels et médicinaux.</p>
      </section>

      <section>
        <h3>La Transmission des Savoirs</h3>
        <p>La famille Al-Nadir a toujours été très protectrice de ses connaissances sur l'Elenfaloth. Ces savoirs se transmettaient oralement de génération en génération, accompagnés de récits mythologiques et de légendes familiales. Les aînés enseignaient aux jeunes les techniques de récolte, de préparation et d'utilisation de la plante, assurant ainsi la pérennité de leurs traditions.</p>
      </section>

      <section>
        <h3>L'Âge d'Or de l'Elenfaloth</h3>
        <p>Le tournant majeur pour la famille Al-Nadir se produisit au début du 20ème siècle. Alors que le monde extérieur commençait à s'intéresser aux substances hallucinogènes pour leur potentiel thérapeutique et récréatif, les Al-Nadir virent une opportunité de partager leur savoir tout en préservant leur héritage. Ils commencèrent à développer des produits à base d'Elenfaloth, allant des encens aux infusions, en passant par des extraits concentrés.</p>
      </section>

      <section>
        <h3>La Modernisation et l'Expansion</h3>
        <p>Au fil des décennies, les Al-Nadir modernisèrent leurs méthodes de production tout en respectant les traditions. Ils construisirent des serres pour cultiver l'Elenfaloth dans des conditions optimales et ouvrirent des laboratoires pour analyser et améliorer les propriétés de la plante. Leur produit phare, une potion hallucinogène nommée "Rêve de Désert", devint célèbre pour ses effets puissants et sa pureté inégalée.</p>
      </section>

      <section>
        <h3>Les Défis et la Résilience</h3>
        <p>Comme toute industrie florissante, les Al-Nadir durent faire face à des défis majeurs. Les lois internationales sur les substances psychotropes devinrent plus strictes, et la famille dut naviguer à travers un labyrinthe de régulations pour continuer à prospérer. Cependant, leur connaissance intime de l'Elenfaloth et leur adaptabilité leur permirent de surmonter ces obstacles. Ils diversifièrent leurs produits et explorèrent des marchés légaux, tels que les thérapies alternatives et les produits de bien-être.</p>
      </section>

      <section>
        <h3>L'Héritage et l'Impact Culturel</h3>
        <p>Aujourd'hui, l'industrie de l'Elenfaloth dirigée par les Al-Nadir est non seulement une entreprise prospère mais aussi un symbole de la riche culture bédouine. Ils organisent des festivals annuels pour célébrer l'Elenfaloth, où ils partagent leurs traditions avec le monde et éduquent le public sur les usages respectueux et bénéfiques de cette plante.</p>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>L'histoire de la famille Al-Nadir et de l'Elenfaloth est un témoignage puissant de la manière dont une petite tribu bédouine a su transformer un savoir ancestral en une industrie moderne et florissante. Leur voyage à travers les âges, marqué par la préservation de leurs traditions et l'innovation, est une source d'inspiration pour tous ceux qui cherchent à harmoniser le passé et le présent pour construire un avenir prometteur.</p>
      </section>
    </div>

  </Layout>
)

export default AboutPage
