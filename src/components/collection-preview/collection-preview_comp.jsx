import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { selectDirectory, setIsPrevious } from '../../redux/directory/directorySlice'
import fetchGames from '../../redux/gameApi/gameApi'
import Card from '../card/card_comp'
import Loading from '../loading/loading_comp'
import './collection-preview_comp.scss'

const CollectionPreview = () => {
  const dispatch = useDispatch()
  
  const { filter, collection: { body, page }, sort }= useSelector(selectDirectory)
  const config = {
    filter,
    body,
    page, 
    sort
  }
  const { data, isFetching, isError, isPreviousData } = useQuery(['games', config], fetchGames, { keepPreviousData: true, })

  useEffect(() => {
    dispatch(setIsPrevious(isPreviousData))
  }, [isPreviousData, dispatch])
  
  if (isError) return <div>Error</div>
  
  return (
    <div className='collection'>
      {isFetching ? <Loading type='game-card'/> : data.map((item) => <Card key={item.id} {...item}/>)}
    </div>
  )
}

export default CollectionPreview