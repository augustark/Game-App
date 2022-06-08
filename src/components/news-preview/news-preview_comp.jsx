import React from 'react'
import NewsCard from '../news-card/news-card_comp'
import fetchNews from '../../redux/gameNewsApi/gameNewsApi'
import { useQuery } from 'react-query'
import './news-preview_styles.scss'
import Loading from '../loading/loading_comp'

const NewsPreview = () => {
  const { data, isFetching, isError } = useQuery('news', fetchNews, {keepPreviousData: true})

  if (isError) return <div>Error</div>

  return (
    <div className='latest-news'>
     { isFetching ? <Loading type='news-card'/> :
        <>
          <h1>Latest News</h1>
          {data.articles.slice(0, 1).map((article, i) =>
              <a 
                className='news-link-big' 
                key={i} 
                href={article.url} 
                target='_blank' 
                rel='noreferrer'
              >
                <div className='news-card big'>
                  <img src={article.urlToImage} alt=''/>
                  <div className='news-card-info'>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <span>Source: {article.source.name}</span>
                  </div>
                </div>
              </a> 
            )}
          {data.articles.slice(1).map((article, i) => <NewsCard key={i} {...article}/>)}
        </>
      }
    </div>
  )
}

export default NewsPreview