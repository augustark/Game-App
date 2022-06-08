import React from 'react'
import './news-card_styles.scss'

const NewsCard = ({ title, description, url, urlToImage, source }) => {
  return (
    <a className='news-link' href={url} target='_blank' rel='noreferrer'>
      <div className='news-card'>
        <img src={urlToImage} alt=''/>
        <div className='news-card-info'>
          <h3>{title}</h3>
          <p>{description}</p>
          <span>Source: {source.name}</span>
        </div>
      </div>
    </a>
  )
}

export default NewsCard