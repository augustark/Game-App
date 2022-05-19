import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Popular = () => <h1>Popular</h1>
const ComingSoon = () => <h1>Coming Soon</h1>

function Games() {
  return (
    <div>
      Games
      <Routes>
        <Route path='popular' element={<Popular/>}/>
        <Route path='coming-soon' element={<ComingSoon/>}/>
      </Routes>
    </div>
  )
}

export default Games