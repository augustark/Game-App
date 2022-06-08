import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setCollection, setPage } from '../../redux/directory/directorySlice';

const CollectionNavigation = () => {
  const { collection, isPreviousData } = useSelector((state) => state.directory)
  const dispatch = useDispatch()
  
  const prev = () => dispatch(setPage(collection.page - 1))
  const next = () => dispatch(setPage(collection.page + 1))
  
  const classActive = ({ isActive }) => isActive ? 'active' : ''

  return (  
    <div className='collections'>
      <button disabled={isPreviousData} onClick={() => dispatch(setCollection(''))}>
        <NavLink className={classActive} to='/games' end>Featured</NavLink>
      </button>
      <button disabled={isPreviousData} onClick={() => dispatch(setCollection('coming_soon'))}>
        <NavLink className={classActive} to='/games/coming_soon'>Coming Soon</NavLink>
      </button>
      <button disabled={isPreviousData} onClick={() => dispatch(setCollection('recently_released'))}>
        <NavLink className={classActive} to='/games/recently_released'>Recently Released</NavLink>
      </button>
      <div className='pagination'>
        <button disabled={collection.page === 1} onClick={prev}><IoChevronBack/></button>
        <span className='page-number'>{collection.page}</span>
        <button disabled={isPreviousData} onClick={next}><IoChevronForward/></button>
      </div>
    </div>
  )
}

export default CollectionNavigation