import React from "react";
import Image from "../Image/Image";
import Article from "../Article/Article";
export default function AboutMarketPlace() {
  const heading = "ABOUT MARKETPLACE";
  const article = `DMarket is a marketplace to trade virtual items and technology for building metaverses. Based on the latest Newzoo report it’s a Top-3 blockchain-based marketplace.
  DMarket builds bridges between real and virtual worlds by creating a cross-chain platform that accumulates multiple metaverses for brands, influencers, video games, eSports organizations, broadcasters, and all kinds of entities. DMarket is connecting the entertainment industry with the global metaverse.`;
  const btntext = "Go to market";
  return (
    <div className="about-us-wrapper">
        <div className="about-us-content-wrapper">
        <Article heading={heading} article={article} btntext={btntext} />
      <Image
        source="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/articles/marketplace-x2.webp"
        className="about-us-img"
      />
        </div>
     
    </div>
  );
}
