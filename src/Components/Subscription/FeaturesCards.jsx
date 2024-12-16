import React from 'react'
import Fcstyle from "./pricingplans.module.css"

const FeaturesCards = () => {
  return (
    <div className={Fcstyle.cardContainer}>
        <div className={Fcstyle.heading}>
            <h2>Features For You</h2>
        </div>

        <div className={Fcstyle.subtitle}>
            <p>Say goodbye to chaos and hello to streamlined reverse sourcing.</p>
        </div>

        <div className={Fcstyle.featureslist}>
            <p>Seller Management</p>
            <p>Bookmark & Nickname Sellers</p>
            <p>All In One Product Feed</p>
            <p>Pre-populated Product Feeds</p>
            <p>Bookmark Products</p>
            <p>Saved Product Feed</p>
            <p>Pause/Activate Sellers</p>
            <p>Tags Sellers with Keywords</p>
            <p>Filter Options</p>
            <p>Keepa Chart Integration</p>
        </div>
    </div>
  )
}

export default FeaturesCards
