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
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>About Elenfaloth Fantasy</h1>
      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
        Let yourself be carried away to the Orient...
      </p>
    </div>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '2rem' }}>
      <section>
        <h2>The Fascinating Story of the Al-Nadir Family and the Elenfaloth: A Journey Through the Ages</h2>
        <p>In the vast stretches of the desert, where the sand dances under the scorching sun and the stars illuminate the night with unparalleled clarity, a Bedouin family, the Al-Nadir, managed to transform a mysterious plant, the Elenfaloth, into a prosperous industry. The story of this family is one of ancestral traditions, well-guarded secrets, and remarkable resilience in the face of time's challenges.</p>
      </section>

      <section>
        <h3>The Origins of Elenfaloth</h3>
        <p>The Elenfaloth is a unique plant, growing exclusively in the arid and hard-to-reach regions of the desert mountains. Its magical properties are numerous, but few tribes have unlocked its secrets as the Al-Nadir have. The earliest accounts of the use of Elenfaloth date back over 1000 years, when the ancestors of the Al-Nadir used this plant for spiritual and medicinal rituals.</p>
      </section>

      <section>
        <h3>The Transmission of Knowledge</h3>
        <p>The Al-Nadir family has always been very protective of their knowledge of the Elenfaloth. This knowledge was transmitted orally from generation to generation, accompanied by mythological tales and family legends. The elders taught the young the techniques of harvesting, preparing, and using the plant, thus ensuring the continuity of their traditions.</p>
      </section>

      <section>
        <h3>The Golden Age of Elenfaloth</h3>
        <p>The major turning point for the Al-Nadir family occurred at the beginning of the 20th century. As the outside world began to take an interest in hallucinogenic substances for their therapeutic and recreational potential, the Al-Nadir saw an opportunity to share their knowledge while preserving their heritage. They began to develop products based on Elenfaloth, ranging from incense to infusions and concentrated extracts.</p>
      </section>

      <section>
        <h3>Modernization and Expansion</h3>
        <p>Over the decades, the Al-Nadir modernized their production methods while respecting traditions. They built greenhouses to cultivate Elenfaloth in optimal conditions and opened laboratories to analyze and improve the properties of the plant. Their flagship product, a hallucinogenic potion named "Desert Dream," became famous for its powerful effects and unmatched purity.</p>
      </section>

      <section>
        <h3>Challenges and Resilience</h3>
        <p>Like any thriving industry, the Al-Nadir faced major challenges. International laws on psychotropic substances became stricter, and the family had to navigate a maze of regulations to continue prospering. However, their intimate knowledge of Elenfaloth and their adaptability allowed them to overcome these obstacles. They diversified their products and explored legal markets, such as alternative therapies and wellness products.</p>
      </section>

      <section>
        <h3>Legacy and Cultural Impact</h3>
        <p>Today, the Elenfaloth industry led by the Al-Nadir is not only a prosperous business but also a symbol of rich Bedouin culture. They organize annual festivals to celebrate Elenfaloth, where they share their traditions with the world and educate the public on the respectful and beneficial uses of this plant.</p>
      </section>

      <section>
        <h3>Conclusion</h3>
        <p>The story of the Al-Nadir family and the Elenfaloth is a powerful testament to how a small Bedouin tribe transformed ancestral knowledge into a modern and thriving industry. Their journey through the ages, marked by the preservation of their traditions and innovation, is a source of inspiration for all those seeking to harmonize the past and present to build a promising future.</p>
      </section>
    </div>
  </Layout>
)

export default AboutPage
