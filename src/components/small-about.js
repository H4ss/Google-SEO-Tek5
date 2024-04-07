import React from "react"
import "../styles/small-about.css" // We will create this CSS file next
import gridCarpets from "../images/carpets-grid.png"

const SmallAbout = () => (
  <div className="small-about-container">
    <div className="small-about-image">
      <img src={gridCarpets} alt="Carpets" />
    </div>
    <div className="small-about-text">
    <h2>Our Story</h2>
    <h3>Discover the Magic Behind Elenfaloth Carpets</h3>
    <p>Our journey began in the heart of a small town, fueled by a passion for craftsmanship and a love for exquisite design. 
        At Elenfaloth Carpets, we believe in the power of a well-crafted carpet to transform a space. 
        Each thread weaves a story of tradition, artistry, and relentless pursuit of quality. 
        Join us as we continue to create timeless pieces that resonate with soul and character.</p>
    </div>
  </div>
)

export default SmallAbout
