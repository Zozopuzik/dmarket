import React from 'react'
import './styles.css'
export default function Founders() {
  return (
    <div className='founders-wrapper'>
        <div className="founders-heading">OUR FOUNDERS</div>
        <div className="founder-card-wrapper">
            <div className="founder-cart">
                <img src="	https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/about-us/founder-1.webp" alt="" className="founder-img-one"/>
                <div className="founder-name">Vlad Panchenko</div>
                <div className="founder-job">Founder & CEO</div>
                <div className="founder-article">Involved in virtual item trading since 2008, in 2016 Vlad founded Skins.Cash, a global instant in-game skins market boasting 2M+ visitors a month. In 2015, Vlad founded Suntechsoft Corp Limited, the #1 private merchant of digital goods.</div>
            </div>
            <div className="founder-cart">
            <img src="	https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/about-us/founder-2.webp" alt="" className="founder-img-one"/>
                <div className="founder-name">Tamara Slanova</div>
                <div className="founder-job">Co-Founder, CFO, Head of London Office</div>
                <div className="founder-article">Tamara has more than 15 years experience in industries including gaming (Global Games, Suntechsoft, Skins.Cash) and international banking.</div>
            </div>
        </div>
    </div>
  )
}
