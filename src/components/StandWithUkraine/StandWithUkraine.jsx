import React from "react";
import "./styles.css";
export default function StandWithUkraine() {
  return (
    <div className="stand-with-ukraine-container">
      <div className="stand-with-ukraine-heading">
        <p className="heading">STAND WITH UKRAINE</p> 
        <p className="subheading">NO TO RUSSIAN AGGRESSION</p>
      </div>
      <div className="stand-with-ukraine-wrapper">
        <div className="stand-with-ukraine-total-sum">
          <p className="stand-with-ukraine-number">$ 17,566,000+</p>
          <p className="stand-with-ukraine-article">
            TOTAL SUM DONATED FOR UKRAINE TO THE <a href="https://twitter.com/FedorovMykhailo/status/1497549813205848068" className="stand-with-ukraine-link">OFFICIAL CRYPTO WALLETS</a> SINCE
            26 FEB 2022
          </p>
        </div>
        <div className="stand-with-ukraine-btn">Donate</div>
      </div>
    </div>
  );
}
