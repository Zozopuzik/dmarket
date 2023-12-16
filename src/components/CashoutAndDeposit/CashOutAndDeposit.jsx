import React from "react";
import Article from "../Article/Article";
import Image from "../Image/Image";
export default function CashOutAndDeposit() {
  const heading = "CASHOUTS & DEPOSITS";
  const article = `DMarket provides 20+ reliable payment methods for users to buy in-game items and cash-out their trading profits. The payment options include Visa/MasterCard, bank wire, PayPal, Skrill, Payoneer, UnionPay, Alipay, and other prominent methods.`;
  const btntext = "More info";
  return (
    <div>
      <div className="about-us-wrapper">
        <div className="about-us-content-wrapper">
          <Article heading={heading} article={article} btntext={btntext} />
          <Image
            source="	https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/articles/dpayments2-v2.webp"
            className="about-us-img"
          />
        </div>
      </div>
    </div>
  );
}
