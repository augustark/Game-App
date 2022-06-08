import React from 'react'
import { useQuery } from 'react-query'
import fetchGames, { upcomingSection } from '../../redux/gameApi/gameApi'
import Card from '../card/card_comp'
import Loading from '../loading/loading_comp'
import './news-sidebar_styles.scss'

const NewsSidebar = () => {
  const { data, isFetching, isError } = useQuery(['games', {body: upcomingSection}], fetchGames, { keepPreviousData: true })

  if (isError) return <div>Error</div>

  return (
    <div className='news-sidebar'>
      {isFetching ? <Loading/> : <h2>Coming Games<br/>This Week</h2>}
      <div className='news-game-cards'>
        {isFetching ? <Loading type='game-card' value={10}/> :
        data.map((game) => (
          <Card key={game.id} {...game} isComing/>
        ))}
      </div>
    </div>
  )
}

export default NewsSidebar