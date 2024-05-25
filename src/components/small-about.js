import React from "react"
import "../styles/small-about.css" // We will create this CSS file next
import gridCarpets from "../images/new/elenfaloth-tmb.png"

const SmallAbout = () => (
  <div className="small-about-container">
    <div className="small-about-image">
      <img src={gridCarpets} alt="Carpets" />
    </div>
    <div className="small-about-text">
      <h2>Our history</h2>
      <h3>Let yourself be carried to the Orient...</h3>
      <p>
        In the vast expanses of the desert, where the sand dances under the scorching sun and the stars illuminate the night with unrivalled clarity,
        a Bedouin family, the Al-Nadirs, have transformed a mysterious plant, the Elenfaloth, into a thriving industry.
        The story of this family is one of ancestral traditions, well-kept secrets and remarkable resilience in the face of the challenges of time.
      </p>
    </div>
  </div>
)

export default SmallAbout
