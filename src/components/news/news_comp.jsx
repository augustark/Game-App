import React from 'react'
import { useQuery } from 'react-query'
import fetchGames from '../../redux/gameApi/gameApi'
import CollectionOverview from '../collection-overview/collection-overview_comp'
import NewsPreview from '../news-preview/news-preview_comp'
import NewsSidebar from '../news-sidebar/news-sidebar_comp'

import './news_styles.scss'

const body = `fields artworks.*, cover.*, genres.*, platforms, screenshots, name, first_release_date, rating, total_rating; where artworks != null & cover != null & genres != null & first_release_date > 1640966400 & first_release_date < 1653926400 & total_rating > 80; sort total_rating asc;`

const News = () => {
  const { data, isFetching, isError } = useQuery(['top-rated', { body }], fetchGames, {keepPreviousData: true})

  if (isError) return <div>Error</div>

  return (
    <div className='news'>
      <div className='news-container'>
        <CollectionOverview title='Top Rated This Month' data={data} isRating isFetching={isFetching}/>
        {/* <NewsPreview/> */}
      </div>
      <NewsSidebar/>
    </div>
  )
}

export default News