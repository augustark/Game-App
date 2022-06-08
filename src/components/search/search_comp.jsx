import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { fetchGamesBySearch } from '../../redux/gameApi/gameApi'

import Card from '../card/card_comp'
import './search_styles.scss'

const Search = () => {
  const { search } = useLocation()
  let param = new URLSearchParams(search)
  let query = param.get('q')

  const {data, isFetching, isError} = useQuery(['search', query], fetchGamesBySearch, { keepPreviousData: true })
  
  if (isFetching) return <h1>LOADING...</h1>
  if (isError) return <h1>OOPS! THERE'S AN ERROR</h1>

  return (
    <div className='search-container'>
      <span>Top {data.length} results for</span>
      <h1>'{capitalize(query)}'</h1>
      <div className='search-cards-container'>
        {data.map((game) => <Card key={game.id} {...game}/>)}
      </div>
    </div>
  )
}

export default Search

const capitalize = (str) => {
  return str.split(' ').map((s) => s.slice(0, 1).toUpperCase() + s.slice(1)).join(' ')
}
