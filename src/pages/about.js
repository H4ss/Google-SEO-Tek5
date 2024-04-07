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
      <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3em' }}>About Elenfaloth Carpets</h1>
      <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.5em' }}>
        Crafting Elegance & Comfort Since 2003
      </p>
    </div>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '2rem' }}>
      <section>
        <h2>Our Epic Journey</h2>
        <p>In the heart of Los Angeles, under the shadow of the city's vibrant skyline, a humble atelier began its quest in 2003 to transform the ordinary into the extraordinary. Elenfaloth Carpets was born from a dream, a vision to craft not just rugs, but canvases of life, comfort, and artistry.</p>
        <p>The founders, a collective of visionary artisans, shared a profound respect for tradition yet yearned to innovate. They toiled with threads of destiny, weaving into each carpet a saga of passion and precision. The clack of wooden looms became their anthem, and the rich tapestry of yarn their manifesto.</p>
        <p>As the years passed, the legend of Elenfaloth's carpets grew. Each knot, a pledge to excellence; each design, a whisper of the past speaking to the future. Our patrons became our champions, narrating tales of our carpets that transformed their homes into bastions of elegance and cultural resonance.</p>
        <p>Today, Elenfaloth stands not merely as a purveyor of carpets but as a beacon of a grander narrative—one where every stitch embodies our relentless pursuit to drape the world in beauty, luxury, and an unparalleled narrative of resilience and ambition.</p>
      </section>

      <section>
        <h2>Our Pledge to Integrity</h2>
        <p>Elenfaloth Carpets is more than a name; it is a testament to our steadfast dedication to ethical engagements and the fostering of a world where business complements benevolence. Our pledges are the very fibers that make up the foundation of every carpet we craft.</p>

        <h3>Community Empowerment</h3>
        <p>We believe in the power of weaving communities together. Our initiatives extend beyond the loom, as we collaborate with local artisans, provide fair wages, and nurture talent. We stand committed to enriching lives, both within our walls and in the wider Los Angeles community that we proudly call home.</p>

        <h3>Environmental Stewardship</h3>
        <p>Our engagement with the environment is woven with respect and mindfulness. By embracing sustainable materials and practices, we aim to leave a lighter footprint on the earth. Our journey towards sustainability is ongoing, and with each step, we reinforce our commitment to a greener, more vibrant planet.</p>

        <h3>Upholding Traditions</h3>
        <p>In an age of fleeting trends, we remain anchored to the timeless. Elenfaloth Carpets honors the ancient traditions of carpet making, preserving the heritage and stories that each pattern holds. Yet, we also look forward, infusing these age-old techniques with contemporary design to meet the modern connoisseur's eye.</p>

        <h3>Educational Outreach</h3>
        <p>Knowledge is a legacy we pass down with as much care as our craftsmanship. Through workshops, internships, and active participation in educational forums, we share the lore of carpet weaving, hoping to inspire a new generation of creators and appreciators.</p>

        <p>These are the engagements that define us, the promises we make not only to our customers but to society and ourselves. At Elenfaloth Carpets, every fiber tells a story, and every story is told with integrity.</p>
      </section>

      <section>
        <h2>Our Engagements</h2>
        <p>At Elenfaloth Carpets, we believe in giving back to the community that has supported us throughout the years. We engage in various initiatives to promote social responsibility, environmental sustainability, and cultural preservation.</p>
      </section>

      <section>
        <h2>Sustainability in Weaving</h2>
        <p>Understanding our environmental impact is key to our process. We use eco-friendly materials and strive to minimize waste, ensuring that the beauty of our products is matched by our respect for the planet.</p>
      </section>

      <section>
        <h2>The Elenfaloth Experience</h2>
        <p>Visiting our showroom is more than just shopping; it's an immersive experience. Our clients are invited to explore the rich textures and patterns of our carpets, discovering the perfect piece for their homes.</p>
      </section>

      <section>
        <h2>Looking to the Future</h2>
        <p>As we continue to grow, our core values remain steadfast. We look forward to bringing the art of Elenfaloth Carpets into more homes around the world, one stitch at a time.</p>
      </section>
    </div>
  </Layout>
)

export default AboutPage
