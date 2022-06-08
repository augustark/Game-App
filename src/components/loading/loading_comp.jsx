import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './loading_styles.scss'

const Loading = ({ type, value }) => {
  switch(type) {
    case 'game-card': {
      return (
        Array(value || 20).fill('').map((item, i) => 
          <div className='card-skeleton' key={i}>
            <Skeleton className='img-skel'/>
            <Skeleton className='name-skel'/>
            <Skeleton className='sub-skel'/>
          </div>)
      )
    }
    case 'news-card': {
      return (
        <div className='news-skeleton'>
          <Skeleton className='h1-skeleton'/>
          <div className='skeleton-container'>
            {Array(20).fill('').map((_, i) => 
              <div className='skeleton-news-card'>
                <Skeleton className='skel-image'/>
                <div className='skel-info'>
                  <Skeleton className='skel-title' count={2}/>
                  <Skeleton className='skel-desc' count={4}/>
                  <Skeleton className='skel-sub'/>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }
    case 'game-overview': {
      return (
        <div className='overview-skeleton'>
          <Skeleton className='h1-skeleton'/>
          <div className='skeleton-container'>
            {Array(5).fill('').map((_, i) => 
              <div className='skeleton-card'>
                <Skeleton className='skel-image'/>
                <Skeleton className='skel-name'/>
                <Skeleton className='skel-sub'/>
              </div>
            )}
          </div>
        </div>
      )
    }
    case 'hero': {
      return (
        <Skeleton className='hero-skeleton'/>
      )
    }
    default: {
      return <Skeleton/>
    }
  }
}

export default Loading

