import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Route, Routes } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { 
  Navbar, 
  News, 
  Footer, 
  Home, 
  Directory, 
  GameDetails,
  CollectionPreview,
  Search
} from './components'

import './App.css'
import { useSelector } from 'react-redux'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode)

  return (
    <SkeletonTheme baseColor={isDarkMode ? "grey" : "#AAAAAA"} highlightColor={isDarkMode ? "#444" : "grey"}>
      <div className={`app ${isDarkMode ? 'dark' : ''}`}>
        <Navbar/>
        <div className='main'>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route index element={<Home />}/>
              <Route path='games' element={<Directory/>}>
                <Route index path='' element={<CollectionPreview />}/>
                <Route path='popular' element={<CollectionPreview />}/>
                <Route path='coming_soon' element={<CollectionPreview />}/>
                <Route path='recently_released' element={<CollectionPreview />}/>
              </Route>
              <Route path='games/:gameId' element={<GameDetails/>}/>
              <Route path='search' element={<Search/>}/>
              <Route path='news' element={<News />}/>
            </Routes>
          </QueryClientProvider>
        </div>
        <Footer/>
      </div>
    </SkeletonTheme>
  )
}

export default App