import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import './footer_styles.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='sc-accounts'>
        <IoLogoFacebook/>
        <IoLogoTwitter/>
        <IoLogoInstagram/>
      </div>
      <p>Copyright &copy; 2022. All rights reserved.</p>
    </footer>
  )
}

export default Footer