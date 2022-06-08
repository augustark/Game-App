import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import './input-field_styles.scss'

const Input = () => {
  const [isClick, setIsClick] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  let navigate = useNavigate()

  const searchInput = useRef(null)

  useEffect(() => {
    if (searchInput.current && isClick) {
      searchInput.current.focus()
    }
  }, [isClick])

  const handleChange = (e) => {
    let value = e.target.value
    setSearchTerm(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let term = searchTerm.split(' ').join('+')
    navigate(`/search?q=${term}`)
    setSearchTerm('')
  }
  
  return (
    <form className='input-container' onSubmit={handleSubmit}>
      <IoSearch onClick={() => setIsClick(true)}/>
      <input 
        className={isClick ? 'display-input' : ''}
        ref={searchInput}
        type='text' 
        placeholder='Search Games' 
        value={searchTerm} 
        onChange={handleChange} 
        onBlur={() => setIsClick(false)}
        onFocus={(e) => e.currentTarget.select()}
      />
    </form>
  )
}

export default Input