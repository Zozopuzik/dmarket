import React from 'react'
import tradeNowImg from '../../assets/images/trade-now-img.jpg'
import './styles.css'
import { IoIosArrowUp } from "react-icons/io";
export default function TradeNow() {
  return (
    <div className='trade-now-wrapper'>
        <div className="trade-now-subheading">SUPPORT UKRAINE</div>
        <div className="trade-now-heading">TRADE SKINS ON DMARKET</div>
        <img src="https://cdn-mp.dmarket.com/prod/v1-0-6/assets/img/home/games.jpg" alt="" className='trade-now-img'/>
        <div className="trade-now-row">
            <div className="trade-now-nav">TF 2</div>
            <div className="trade-now-nav">CS:GO</div>
            <div className="trade-now-nav">RUST</div>
            <div className="trade-now-nav">DOTA2</div>
        </div>
        <div className="trade-now-btn">TRADE NOW</div>
        <div className="trade-now-row2">
            <div className="trade-now-stats">
            <div className="trade-now-stats-heading">11 000 000+</div>
            <div className="trade-now-stats-subheading">Skins On The Market</div>
            </div>
            <div className="trade-now-stats">
            <div className="trade-now-stats-heading">23 000 000+</div>
            <div className="trade-now-stats-subheading">Closed Deals</div>
            </div>
            <div className="trade-now-stats">
            <div className="trade-now-live-feed">
                <div className="small-circle"></div>
                <div className="trade-now-live-feed-text">Live Feed</div> 
                <div className="trade-now-live-feed-arrow"><IoIosArrowUp /></div>
            </div>
            <div className="trade-now-stats-subheading">Live Transactions</div>
            </div>
        </div>
        <img src={tradeNowImg} alt="" className='trade-now-img2'/>
    </div>
  )
}
