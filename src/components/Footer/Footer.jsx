import React from 'react'
import './styles.css'
import footerImg from '../../assets/images/footer.png'
export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <img src={footerImg} alt="" className='footer'/>
    </div>
  )
}
