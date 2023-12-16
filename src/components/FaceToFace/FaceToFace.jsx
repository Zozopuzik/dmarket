import React from "react";
import Image from "../Image/Image";
import Article from "../Article/Article";
export default function FaceToFace() {
  const heading = "FACE2FACE TRADING";
  const article = 'Buy and sell Steam items without transferring them to DMarket. Avoid one trade hold period during each trade and so reduce the total cooldown by half. Use item in the game until it’s sold.'
  const btntext = "TRADE Face2face";
  return (
    <div className="about-us-wrapper">
        <div className="about-us-content-wrapper">
        <Article heading={heading} article={article} btntext={btntext} />
      <Image
        source="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/articles/f2f-x2.webp"
        className="about-us-img"
      />
        </div>
     
    </div>
  );
}
