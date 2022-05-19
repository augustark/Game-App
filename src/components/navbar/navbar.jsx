import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import lightLogo from '../../assets/light_logo.svg'
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => setSearchTerm(e.target.value)

  return (
    <NavContainer>
      <Container>
        <div className='logo'>
          <ImageLink to='/'>
            <img src={lightLogo} alt='logo'/>
          </ImageLink>
        </div>
        <LinksContainer>
          <StyledLink to='games'>Games</StyledLink>
          <StyledLink to='news'>News</StyledLink>
          <StyledLink to='about'>About</StyledLink>
        </LinksContainer>
        <SearchBar>
          <input type='text' placeholder='Search Games' onChange={handleChange}/>
          <IoSearch/>
        </SearchBar>
        <Nightmode>NIGHT MODE: <span>ON</span></Nightmode>
      </Container>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  color: #FFF;
  padding: 1em;
  gap: 1em;
  margin: 0 5rem;
`

const LinksContainer = styled.div`
  display: flex;
  gap: 2em;
  margin-right: auto;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

const ImageLink = styled(StyledLink)`
  cursor: default;
  img {
    margin-right: 1rem;
    padding-top: 0.7rem;
    width: 100px;
  }
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  position: relative;

  svg {
    position: absolute;
    right: 0.625rem;
    color: #000;
    height: 18px;
    width: 18px;
  }

  input {
    font-size: 12px;
    padding: 0.5rem 0.8rem;
    padding-right: 2rem;
    border-radius: 0.1875rem;
    border: none;
  }
`

const Nightmode = styled.div`
  font-size: 12px;
  color: #AAA;
  cursor: default;
  span {
    color: #FFF;
    cursor: pointer;
  }
`

