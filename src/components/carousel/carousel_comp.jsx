import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBack, IoChevronForward, IoPlayCircle } from 'react-icons/io5'
import { TiStarFullOutline } from 'react-icons/ti'
import Loading from '../loading/loading_comp'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './carousel_styles.scss'

const Carousel = ({ data, loading }) => {
  const swiperRef = React.useRef()

  return (
    <div className='carousel'>
      {loading ? <Loading type='hero'/> : 
        <>
          <Swiper
            onSwiper={(swiper) => swiperRef.current = swiper}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            pagination={{
              clickable: true
            }}
            modules={[Pagination, Autoplay]}
          >
            {data.map((game) => 
              <SwiperSlide key={game.id}>
                <Slide {...game}/>
              </SwiperSlide>
            )}
          </Swiper>
          <div className='controls'>
            <IoChevronBack onClick={() => swiperRef.current.slidePrev()}/>
            <IoChevronForward onClick={() => swiperRef.current.slideNext()}/>
          </div>
        </>
      }
    </div>
  )
}

export default Carousel

const Slide = (props) => {
  const navigate = useNavigate()
  const {
    artworks, 
    first_release_date, 
    id, 
    name, 
    summary, 
    themes, 
    total_rating, 
    videos,
  } = props

  const url = artworks[0]?.url?.replace('t_thumb', 't_1080p')
  const rating = Math.floor(total_rating)
  const date = new Date(first_release_date * 1000).toLocaleDateString()
  const desc = summary.length > 400 ? summary.slice(0, 400) + '...' : summary
  const theme = themes?.filter((th, i) => i < 4)?.map(({ id, name }) => <button key={id}>{name}</button>)

  return (
    <>
      <img className='slide-hero-bg' src={url} alt=''/>
      <div className='slide-info'>
        <h1 className='info-name'>{name}</h1>
        <div className='info-ratings'>
          <p className='rating'><TiStarFullOutline/>{rating}%</p>
          <p>{date}</p>
        </div>
        <p className='info-desc'>{desc}</p>
        <div className='info-genres'>
          {theme}
        </div>
        <div className='info-buttons'>
          <a href={`https://www.youtube.com/watch?v=${videos[0].video_id}`} target='_blank' rel='noreferrer'>
            <button className='watch'>
              <IoPlayCircle/>
              WATCH TRAILER
            </button>
          </a>
          <button onClick={() => navigate(`/games/${id}`)}>LEARN MORE</button>
        </div>
      </div>
    </>
  )
}