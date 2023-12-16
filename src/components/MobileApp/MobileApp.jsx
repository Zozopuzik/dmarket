import React from 'react'
import './styles.css'
import appImg from '../../assets/images/app-img.jpg'
export default function MobileApp() {
  return (
    <div className='mobile-app-wrapper'>
        <div className="mobile-app-content-wrapper">
          <div className="mobile-app-img-wrapper">
          <img src="https://cdn-mp.dmarket.com/prod/v1-0-7/assets/img/home/articles/mobile-v2.webp" alt="" className='mobile-app-first-img'/>
          </div>
            <div className="mobile-app-article-wrapper">
            <div className="mobile-app-heading">MOBILE APPLICATION</div>
            <div className="mobile-app-article">DMarket’s mobile apps for iOS and Android provide full platform functionality for the users, anytime and anywhere.</div>
            <img src={appImg} alt="" className='mobile-app-second-img'/>
            </div>
        </div>
    </div>
  )
}
