import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { setDarkMode } from '../../redux/nightmode/nightmodeSlice';

import lightLogo from '../assets/light-ver.svg'
import darkLogo from '../assets/dark-ver.svg'
import './navbar_styles.scss'
import Input from '../input-field/input-field_comp';
import { endsWithNumber } from './helper';

const Navbar = () => {
  const { pathname } = useLocation()

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode)
  const dispatch = useDispatch()

  const setTheme = () => dispatch(setDarkMode(isDarkMode ? false : true))
  const classActive = ({ isActive }) => isActive ? 'active' : ''
  const addClass = pathname === '/' ? '' : endsWithNumber(pathname) ? '' : 'not-home'

  return (
    <div className={`navbar ${addClass}`}>
      <div className='navbar-container'>
        <div className='logo-container'>
          <img 
            className='logo' 
            src={pathname === '/' || endsWithNumber(pathname) || isDarkMode ? darkLogo : lightLogo} 
            alt='logo'
          /> 
        </div>
        <div className='links-container'>
          <NavLink className={classActive} to='/'>Home</NavLink>
          <NavLink className={classActive} to='/games'>Games</NavLink>
          <NavLink className={classActive} to='/news'>News</NavLink>
        </div>
        <Input/>
        <button className='theme-btn' onClick={setTheme}>NIGHT MODE: <span>{isDarkMode ? 'ON' : 'OFF'}</span></button>
      </div>
    </div>
  )
}

export default Navbar