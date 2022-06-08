import React from 'react'
import { useQuery } from 'react-query'
import fetchGames, { heroSection, popularSection, upcomingSection } from '../../redux/gameApi/gameApi'
import fetchNews from '../../redux/gameNewsApi/gameNewsApi'
import CollectionOverview from '../collection-overview/collection-overview_comp';
import Carousel from '../carousel/carousel_comp'
import './home_styles.scss'

const Home = () => {
  const { data: heroData, isFetching, isError} = useQuery(['featured', {body: heroSection}], fetchGames, { keepPreviousData: true, })
  const { data: popularData, isFetching: dataFetching2 } = useQuery(['featured', {body: popularSection}], fetchGames, { keepPreviousData: true, })
  const { data: upcomingData, isFetching: dataFetching3} = useQuery(['featured', {body: upcomingSection}], fetchGames, { keepPreviousData: true, })
  const { data: newsData, isFetching: newsFetching, isError: newsError } = useQuery('home-news', fetchNews, { keepPreviousData: true })

  if (isError) return <div>Error Occured</div>
  if (newsError) return <div>Error Occured</div>
  
  return (
    <div className='home'>
      <Carousel data={heroData} loading={isFetching}/>
      <CollectionOverview data={popularData} title='Popular' id='popular' isFetching={dataFetching2}/>
      <CollectionOverview data={upcomingData} title='Upcoming' id='coming_soon' isFetching={dataFetching3}/>
      {!newsFetching &&
        <div className='news-peek'>
          <h1>Today's News</h1>
          <div className='peek-cards'>
            {newsData.articles.slice(0, 2).map((article, i) => 
              <a href={article.url} target='_blank' rel='noreferrer' key={i}>
                <div className='peek-card'>
                  <img src={article.urlToImage} alt=''/>
                  <div className='peek-card-info'>
                    <span>Source: {article.source.name}</span>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      }
    </div>
  )
}

export default Home