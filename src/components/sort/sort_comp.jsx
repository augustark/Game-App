import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setSort } from '../../redux/directory/directorySlice'
import './sort_styles.scss'

const Sort = () => {
  const { option } = useSelector(state => state.directory.sort)
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const handleChange = (e) => {
    const value = e.currentTarget.value
    dispatch(setSort({
      option: value,
      order: value.toLowerCase() === 'title' ? 'asc' : 'desc'
    }))
  }

  return (
    <div className='sort'>
      <span>Sort: </span>
      <select defaultValue={option} onChange={handleChange}>
        <option value='Rating' disabled={pathname === '/games/coming_soon'}>Rating</option>
        <option value='Title'>Title</option>
        <option value='Release Date'>Release Date</option>
      </select>
    </div>
  )
}

export default Sort