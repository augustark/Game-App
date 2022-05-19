import React from 'react'
import CollectionOverview from '../components/collection-overview'
import Hero from '../components/hero'
import { useGetGamesQuery } from '../features/gameApi/gameApi'
import { useGetGameNewsQuery } from '../features/gameApi/gameNewsApi'

import styled from 'styled-components'
import NewsCard from '../components/newsCard'
import GameCard from '../components/gameCard'
import Loading from '../components/loading'
import { getPopular, getThisYear, getComingSoon } from '../features/gameApi/apiBody'

function Home() {
  // const gameHeroData = useGetGamesQuery(getThisYear)
  // const gamePopularData = useGetGamesQuery(getPopular)
  // const gameComingSoonData = useGetGamesQuery(getComingSoon)
  // const gameNewsData = useGetGameNewsQuery({ newsCategory: 'videogame', count: 10})

  // if (gameHeroData.isFetching) return <Loading/>
  
  return (
    <div>
      {/* <Hero slides={gameHeroData.data.slice(0, 5)}/>
      <Container>
        <CollectionOverview title='Popular' link='games/popular' data={gamePopularData.data.slice(0, 5)} element={<GameCard/>}/>
        <CollectionOverview title='Upcoming Games' link='games/coming-soon' data={gameComingSoonData.data.slice(5, 10)} element={<GameCard/>}/>
        <CollectionOverview title='Latest News' link='news' data={gameNewsData.data.value.slice(0, 2)} element={<NewsCard/>}/>
      </Container> */}
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