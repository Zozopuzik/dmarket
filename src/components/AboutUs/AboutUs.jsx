import React from "react";
import Image from "../Image/Image";
import Article from "../Article/Article";
import handleRedirect from "../../helpers/redirect.js";
import "./styles.css";
export default function AboutUs() {
  const heading = 'ABOUT US'
  const article = `Ukrainian-born startup DMarket unlocks the
  multi-billion-dollar skins economy for game developers and players
  everywhere. Our team of passionate gamers believes a borderless
  gaming world is a better gaming world, and we’re building the
  infrastructure to make it easy for everyone to thrive in the open
  system of the future.`
  const btntext = 'Read more about us'
  return (
    <div className="about-us-wrapper">
      <div className="about-us-content-wrapper">
        <Image source="https://cdn-mp.dmarket.com/prod/v1-0-6/assets/img/home/articles/about_us-2.webp" className="about-us-img"/>
        <Article heading={heading} article={article} btntext={btntext}/>
      </div>
    </div>
  );
}
