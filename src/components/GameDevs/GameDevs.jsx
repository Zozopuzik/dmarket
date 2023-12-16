import React from 'react'
import Article from "../Article/Article";
import Image from "../Image/Image";
import './styles.css'
export default function GameDevs() {
    const heading = "FOR GAME DEVELOPERS";
    const article = `DMarket creates an ecosystem where game developers, players, influencers, and brands can co-create video game content securely, making a profit while continuing to have fun in different gaming multiverses.`;
    const btntext = "GEt more info";
  return (
    <div>
    <div className="game-devs-wrapper">
      <div className="about-us-content-wrapper">
        <Article heading={heading} article={article} btntext={btntext} />
        <Image
          source="	https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/articles/developers-x2.webp"
          className="about-us-img"
        />
      </div>
    </div>
  </div>
  )
}
