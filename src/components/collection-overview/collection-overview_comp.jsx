import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
import { setCollection } from '../../redux/directory/directorySlice'

import Card from '../card/card_comp'
import './collection-overview_styles.scss'
import Loading from '../loading/loading_comp'


const CollectionOverview = ({ data, title, id, isRating, isComing, isFetching }) => {
  const swiperRef = React.useRef()
  const dispatch = useDispatch()
  
  return (
    <div className='collection-overview'>
      {isFetching ? <Loading type='game-overview'/> :
        <>
          <div className='collection-header'>
            <h1>{!isRating ? `${title} Games` : title}</h1>
            {!isRating && 
              <button onClick={() => dispatch(setCollection(id))}>
                <Link to={`/games/${id}`}>View All</Link>
              </button>
            }
          </div>
          <Swiper
            onSwiper={(swiper) => swiperRef.current = swiper}
            slidesPerView={5}
            spaceBetween={20}
          >
            {data?.map((game) => 
              <SwiperSlide key={game.id}>
                <Card {...game} isComing={isComing} isRating={isRating}/>
              </SwiperSlide>
            )}
          </Swiper>
          <div className='controls'>
            <IoChevronBack onClick={() => swiperRef.current.slidePrev()}/>
            <IoChevronForward onClick={() => swiperRef.current.slideNext()}/>
          </div>
        </>
      }
      {/*  */}
    </div>
  )
}

export default CollectionOverview