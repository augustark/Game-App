import React from 'react'
import CollectionOverview from '../components/collection-overview'
import Hero from '../components/hero'
import { useGetGamesQuery } from '../features/gameApi/gameApi'
import { useGetGameNewsQuery } from '../features/gameApi/gameNewsApi'

import styled from 'styled-components'
import NewsCard from '../components/newsCard'
import GameCard from '../components/gameCard'

function Home() {
  const gameData = useGetGamesQuery(100)
  const gameNewsData = useGetGameNewsQuery({ newsCategory: 'videogame', count: 10})


  if (gameData.isFetching) return console.log('fetching...')
  if (gameNewsData.isFetching) return console.log('fetching...')
  
  return (
    <div>
      <Hero slides={gameData.data.slice(0, 5)}/>
      <Container>
        <CollectionOverview title='Popular' link='games/popular' data={gameData.data.slice(0, 5)} element={<GameCard/>}/>
        <CollectionOverview title='Upcoming Games' link='games/upcoming' data={gameData.data.slice(0, 5)} element={<GameCard/>}/>
        <CollectionOverview title='Latest News' link='news' data={gameNewsData.data.value.slice(0, 2)} element={<NewsCard/>}/>
      </Container>
    </div>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 5rem auto;
  max-width: 1400px;
`