import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { _GENRES, _PLATFORMS } from './genres_and_platforms'

import CollectionNavigation from '../collection-navigation/collection-navigation_comp';
import Filter from '../filter/filter_comp';

import './directory_styles.scss'
import Sort from '../sort/sort_comp';

const Directory = () => {
  const { collection, isPreviousData } = useSelector((state) => state.directory)
  const data = [{title: 'hello'}, {title: 'working'}]

  return (
    <div className='directory'>
      <div className='sidebar'>
        <Filter title='Platforms' data={_PLATFORMS} disable={isPreviousData}/>
        <Filter title='Genres' data={_GENRES} disable={isPreviousData}/>
      </div>
      <div className='collection-container'>
        <div className='header'>
          <Link to='/'>Home / Games</Link>
          <h1>{collection.title}</h1>
        </div>
        <div className='sorting-collections'>
          <Sort/> 
          <CollectionNavigation/>
        </div>
        <Outlet context={data}/>
      </div>
    </div>
  )
}

export default Directory
