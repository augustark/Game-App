import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import fetchGames from '../../redux/gameApi/gameApi'
import CollectionOverview from '../collection-overview/collection-overview_comp'

import './game-details_styles.scss'

const findGame = (id) => {
  return `fields artworks.*, cover.*, first_release_date, game_modes.*, genres.*, name, platforms.*, player_perspectives.*, rating, release_dates.*, screenshots.*, similar_games.cover.*, similar_games.genres.*, similar_games.name, similar_games.first_release_date, slug, storyline, summary, themes.name, total_rating, updated_at,url, videos.*, websites.*; where id = ${id};`
}

const GameDetails = () => {
  const { gameId } = useParams()
  const body = findGame(gameId)

  const config = {
    body,
    request: 1
  }

  const { data, isLoading, isError } = useQuery(['game', config], fetchGames, { keepPreviousData: true, })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  
  const {
    artworks,
    cover,
    genres, 
    platforms,
    first_release_date,
    total_rating,
    websites,
    name,
    summary,
    screenshots,
    storyline,
    similar_games
  } = data[0]

  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const dateReleased = new Date(first_release_date * 1000).toLocaleDateString(undefined, options)

  const mapoutStr = (arr) => {
    return <span>{arr.map(item => item.name).join(', ')}</span>
  }

  const backdrop = !artworks ? screenshots[0] : artworks[0]

  return (
    <div className='game-container'>
      <div className='game-hero'>
        <img src={backdrop.url.replace('t_thumb', 't_1080p')} alt=''/>
      </div>
      <div className='game-details'>
        <img className='game-poster' src={cover.url.replace('t_thumb', 't_cover_big')} alt=''/>
        <div className='game-info'>
          <p>Genre: {mapoutStr(genres)}</p>
          <p>Platform: {mapoutStr(platforms)}</p>
          <p>Release Date: <span>{dateReleased}</span></p>
          <a href={websites[0].url} target='_blank' rel='noreferrer'>Official Website</a>
          <div className='game-rating'>
            {!total_rating ? <h3>No Rating</h3> : <h1>{Math.floor(total_rating)}%</h1>}
            <p>Overall Rating</p>
          </div>
        </div>
        <div className='game-summary'>
          <h1 className='game-title'>{name}</h1>
          <h2>Summary</h2>
          <p>{summary}</p>
          { storyline && 
            <p className='storyline'><strong>Storyline: </strong>{storyline}</p>
          }
        </div>
        <div className='game-media'>
          <h2>Gallery</h2>
          <div className='media-list'>
            {screenshots.map(shot => <img key={shot.image_id} src={shot.url.replace('t_thumb', 't_cover_big')} alt={shot.checksum}/>)}
          </div>
        </div>
      </div>
      <CollectionOverview 
        data={similar_games} 
        title={'Similar'}
      />
    </div>
  )
}

export default GameDetails