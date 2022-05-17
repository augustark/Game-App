import React from 'react'
import Hero from '../components/hero'
import { useGetGamesQuery } from '../features/gameApi/gameApi'

const body = `fields cover.*, created_at, hypes, involved_companies, name, platforms, rating, release_dates, status, screenshots.*, storyline, summary, total_rating, url, videos.*;
where videos != null & hypes != null & release_dates.date > 1641038401 & total_rating > 80; limit 5;
sort popularity asc;`

function Home() {
  const { data, isFetching } = useGetGamesQuery(body)

  if (isFetching) return console.log('fetching...')

  return (
    <div>
      <Hero slides={data}/>
    </div>
  )
}

export default Home