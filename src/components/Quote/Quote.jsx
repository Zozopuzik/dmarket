import React from "react";
import "./styles.css";
export default function Quote() {
  return (
    <div className="quote-wrapper">
      <div className="qoute-content-wrapper">
        <div className="quote-article-wrapper">
          <div className="quote-text">
            <i>DMarket is a pioneer in the open market trading of game-related
            virtual goods, a market that will explode in the next decade.</i>
          </div>
          <div className="quote-artilce">
            “I love that DMarket is at the intersection of five growth trends in
            the game industry: advanced social games, virtual goods trading,
            fashion, esports, and blockchain. DMarket has a big opportunity to
            be a new kind of leader in the game industry. They have the
            leadership, ideas, and resources to succeed and it is fun for me to
            help a talented executive like Vlad. ”
          </div>
          <div className="quote-author">TRIP HAWKINS</div>
          <div className="quote-gree-text">
            <p>DMarket's Independent Board Member</p>
            <p>Founder and The First CEO of Electronic Arts</p>
          </div>
        </div>
        <img
          src="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/trip-hawkins.webp"
          alt=""
          className="quote-img"
        />
      </div>
    </div>
  );
}
