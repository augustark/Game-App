import React from 'react'
import { Link } from 'react-router-dom'
import './card_styles.scss'

import img_placeholder from '../assets/placeholder.png'

const Card = (props) => {
  const {id, cover, name } = props

  return (
    <Link className='card-container' to={`/games/${id}`} >
      <div className='card'>
        <img src={cover?.url?.replace('t_thumb', 't_cover_big') || img_placeholder} alt=''/>
        <div className='card-info'>
          <h3>{name}</h3>
          <span>{subtitle(props)}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card

const subtitle = (props) => {
  const { 
    isComing, isRating, 
    first_release_date, 
    total_rating, 
    genres, themes 
  } = props

  const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
  const dateReleased = new Date(first_release_date * 1000).toLocaleDateString(undefined, dateOptions)
  const totalRating = Math.floor(total_rating) + '%'
  const theme = themes ? themes[0].name : ''
  const genre = genres ? genres[0].name : ''

  let sub 

  if (isComing) {
    sub = dateReleased
  } else if (isRating) {
    sub = totalRating
  } else {
    sub = genre ? genre : theme
  }

  return sub
}