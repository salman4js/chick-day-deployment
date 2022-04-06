import React from 'react'
import chickdayUpdatedLogo from '../assetsPictures/chickdayUpdatedLogo.jpeg';


const About = () => {
  return (
    <div className="container" id="about">
      <div className="browse-name">
        <h1 className="browse-title">
          ABOUT US!
        </h1>
        <hr />
        
        <div className = "chickdayUpdatedLogo">
          <img src={chickdayUpdatedLogo} class="img-fluid" width = "1000" alt="Responsive image" />
        </div>
      </div>
      <div className="about-us">
        <p className="a-sub">
          Come over to Chick-Day to experience the spicy fried chicken & pizza taste you have tasted ever!
        </p>
        <p className="a-desc">
          The finest ingredients straight from mom Nature.
          A carefully cultivated technique in preparation.
          Above all, an urge to delight the chicken lover.
        </p>
      </div>
    </div>
  )
}

export default About;