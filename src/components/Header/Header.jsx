import React from 'react'
import './styles.css'
import { FaQuestionCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import handleRedirect from '../../helpers/redirect.js'; 
import logo from '../../assets/images/header-logo.jpg'
import flame from '../../assets/images/flame.jpg'
import americanFlag from '../../assets/images/american-flag.jpg'
import profile from '../../assets/images/profile.jpg'
export default function Header() {
  return (
    <div className='hader-wrapper'>
        <img src={logo} alt="" className='header-logo' onClick={handleRedirect}/>
        <div className="header-navigation">
            <div className="header-nav" onClick={handleRedirect}>Marketplace</div>
            <div className="header-nav" onClick={handleRedirect}>Top txns</div>
            <div className="header-nav" onClick={handleRedirect}>F2f Market</div>
            <div className="header-nav" onClick={handleRedirect}>Explorer</div>
            <div className="header-nav" onClick={handleRedirect}>Trading api</div>
            <div className="header-nav" onClick={handleRedirect}>Blog</div>
        </div>
        <div className="log-in-section">
            <div className="header-icons">
            <FaQuestionCircle color='#fff' size={20} onClick={handleRedirect}/>
            <FaComments color='#fff' size={20} onClick={handleRedirect}/>

            <img src={flame} alt="" className='header-img' onClick={handleRedirect}/>
            <img src={americanFlag} alt="" className='header-img' onClick={handleRedirect}/>
            </div>
            <div className="header-btns">
                <div className="header-log-in-btn" onClick={handleRedirect}>Log in</div>
                <div className="header-sign-up-btn" onClick={handleRedirect}>Sing up</div>
                <img src={profile} alt="" className='header-img' onClick={handleRedirect}/>
            </div>
        </div>
    </div>
  )
}
