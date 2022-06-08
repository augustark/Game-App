import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPlatform, addGenre } from '../../redux/directory/directorySlice'

import './filter_styles.scss'

const Filter = ({ title, data, disable }) => {
  const [selectData, setSelectData] = React.useState(data)
  const dispatch = useDispatch()

  const handleSelect = (id) => {
    setSelectData((prev) => 
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isSelected: !item.isSelected
          }
        }
        return item
      })
    )
  }

  useEffect(() => {
    const filteredId = selectData.filter(item => item.isSelected).map(item => item.id)

    if (title.toLowerCase() === 'platforms') {
      dispatch(addPlatform(filteredId))
    }
    else if (title.toLowerCase() === 'genres') {
      dispatch(addGenre(filteredId))
    }
    
  }, [selectData, title, dispatch])

  return (
    <div className='filter'>
      <h3>{title}</h3>
      {selectData.map((dataFilter) => 
        <button
          key={dataFilter.id}
          className={`filter-btn ${dataFilter.isSelected && 'selected'}`}
          onClick={() => handleSelect(dataFilter.id)}
          disabled={disable}
        >
          {dataFilter.name} 
        </button>
      )}
    </div>
  )
}

export default Filter