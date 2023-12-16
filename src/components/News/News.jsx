import React from "react";
import "./styles.css";
export default function News() {
  return (
    <div className="news-wrapper">
      <div className="news-heading">DMARKET IN THE NEWS</div>
      <div className="news-card-wrapper">
        <div className="news-card">
          <div className="news-img-wrapper">
            <img src="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/about-us/news-logo-forbes.webp" alt="" className="news-img" />
            <div className="news-date">Nov 8, 2019</div>
            <div className="news-article">DMarket founders have 10+ years of experience in virtual item trading and building in-game economy from scratch. The company provides both a toolset to build in-game economy and a place to buy, sell, collect or exchange a wide variety of in-game collectibles...</div>
            <div className="news-read-more">Read More</div>
          </div>
        </div>
        

        <div className="news-card">
          <div className="news-img-wrapper">
            <img src="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/about-us/news-logo-reuters.webp" alt="" className="news-img" />
            <div className="news-date">NOV 26, 2019</div>
            <div className="news-article">There is a shift in the gaming industry towards free-to-play games,” said Tamara Slanova, co-founder of DMarket, a platform for game developers and players to sell virtual outfits or other cosmetic items known as ‘skins’...</div>
            <div className="news-read-more">Read More</div>
          </div>
        </div>
        <div className="news-card">
          <div className="news-img-wrapper">
            <img src="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/about-us/news-logo-venture-beat.webp" alt="" className="news-img" />
            <div className="news-date">AUG 17, 2017</div>
            <div className="news-article">Game developers will be able to use the DMarket API to make items from their games tradable, so they don’t need to create their own independent marketplaces...</div>
            <div className="news-read-more">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
}
