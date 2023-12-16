import React from 'react'
import './styles.css'
export default function TradingApi() {
  return (
    <div className='mobile-app-wrapper'>
        <div className="trading-api-app-content-wrapper">
          <div className="mobile-app-img-wrapper">
          <img src="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/articles/api-x2.webp" alt="" className='mobile-app-first-img'/>
          </div>
            <div className="mobile-app-article-wrapper">
            <div className="mobile-app-heading">TRADING API</div>
            <div className="mobile-app-article">DMarket Trading API enables all users to streamline their skins trading through a comprehensive range of API methods. It can help you manage your DMarket inventory and trade in bulk using pre-set algorithms, without routine manual efforts.</div>
            <div className="trading-api-btn">discover benefits</div>
            </div>
        </div>
    </div>
  )
}
