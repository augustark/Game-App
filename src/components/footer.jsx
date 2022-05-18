import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";

import styled from 'styled-components'


function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <IoLogoFacebook/>
        <IoLogoTwitter/>
        <IoLogoInstagram/>
      </LogoContainer>
      <Copyright>Copyright &copy; 2022. All rights reserved.</Copyright>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 0.5em;
`
const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const Copyright = styled.span`
  font-size: 14px;
`