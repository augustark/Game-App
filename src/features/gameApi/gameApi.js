import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
  "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
  "Authorization": process.env.REACT_APP_IGDB_TOKEN
}

console.log(process.env)

const PROXY = 'https://cors-anywhere.herokuapp.com'

const createRequest = (url, count) => ({ 
  url, 
  headers: apiHeaders, 
  method: 'POST',
  body: `fields artworks.*, cover.*, created_at, genres.*, hypes, involved_companies, name, platforms, rating, release_dates, screenshots.*, storyline, summary, total_rating, url, videos.*;
  where videos != null & cover.image_id != null & genres != null & storyline != null & hypes != null & release_dates.date > 1641038401 & total_rating > 80; limit ${count};
  sort popularity asc;`, 
})

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROXY}/https://api.igdb.com/v4` }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (count) => createRequest(`/games`, count),
    }),
  }),
})


export const { useGetGamesQuery } = gamesApi

// const PROXY = 'https://cors-anywhere.herokuapp.com'
//   const API_PATH = 'https://api.igdb.com/v4/games'

//   fetch(`${PROXY}/${API_PATH}`, { 
//     method: 'POST', 
//     headers: {
//     "Client-ID": 'f718ob9hokldyp04c6daiw1xkufi4b',
//     "Authorization": "Bearer b5blj18r9o116x2c0s4tm6pet6uh34"
//     },
//     body: 'fields name, cover.*, genres.*; where cover.image_id != null & genres != null; limit 2; sort popularity desc;'
//   })
//     .then(res => res.json())
//     .then(data => setData(data))