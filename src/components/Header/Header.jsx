import React from 'react'
import './styles.css'
import { FaQuestionCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

import logo from '../../assets/images/header-logo.jpg'
import flame from '../../assets/images/flame.jpg'
import americanFlag from '../../assets/images/american-flag.jpg'
import profile from '../../assets/images/profile.jpg'
export default function Header() {
  return (
    <div className='hader-wrapper'>
        <img src={logo} alt="" className='header-logo'/>
        <div className="header-navigation">
            <div className="header-nav">Marketplace</div>
            <div className="header-nav">Top txns</div>
            <div className="header-nav">F2f Market</div>
            <div className="header-nav">Explorer</div>
            <div className="header-nav">Trading api</div>
            <div className="header-nav">Blog</div>
        </div>
        <div className="log-in-section">
            <div className="header-icons">
            <FaQuestionCircle color='#fff' size={20}/>
            <FaComments color='#fff' size={20}/>

            <img src={flame} alt="" className='header-img'/>
            <img src={americanFlag} alt="" className='header-img'/>
            </div>
            <div className="header-btns">
                <div className="header-log-in-btn">Log in</div>
                <div className="header-sign-up-btn">Sing up</div>
                <img src={profile} alt="" className='header-img'/>
            </div>
        </div>
    </div>
  )
}
