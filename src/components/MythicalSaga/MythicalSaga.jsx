import React from 'react'
import Article from "../Article/Article";
import Image from "../Image/Image";
export default function MythicalSaga() {
    const heading = "MYTHICAL SAGA EXPLORER";
    const article = `Every transaction on DMarket is registered on blockchain to ensure unrivaled security and prove the ownership and origin of each item. All this data can be accessed by anyone through the Mythical SAGA Explorer.`;
    const btntext = "Expolore Now";
  return (
    <div>
      <div className="about-us-wrapper">
        <div className="about-us-content-wrapper">
          <Article heading={heading} article={article} btntext={btntext} />
          <Image
            source="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/articles/blockchain-x2.webp"
            className="about-us-img"
          />
        </div>
      </div>
    </div>
  )
}
