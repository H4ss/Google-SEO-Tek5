import React from "react"
import "../styles/small-about.css" // We will create this CSS file next
import gridCarpets from "../images/new/elenfaloth-tmb.png"

const SmallAbout = () => (
  <div className="small-about-container">
    <div className="small-about-image">
      <img src={gridCarpets} alt="Carpets" />
    </div>
    <div className="small-about-text">
    <h2>Notre Histoire</h2>
    <h3>Laisser vous porter vers l'Orient...</h3>
    <p>Dans les vastes étendues du désert, où le sable danse sous le soleil brûlant et où les étoiles illuminent la nuit avec une clarté inégalée, 
      une famille de bédouins, les Al-Nadir, a su transformer une plante mystérieuse, l'Elenfaloth, en une industrie prospère. 
      L'histoire de cette famille est celle de traditions ancestrales, de secrets bien gardés et d'une résilience remarquable face aux défis du temps.</p>
    </div>
  </div>
)

export default SmallAbout
