import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
  "Client-ID": 'f718ob9hokldyp04c6daiw1xkufi4b',
  "Authorization": "Bearer b5blj18r9o116x2c0s4tm6pet6uh34"
}

const apiBody = `fields name, cover.*, genres.*; where cover.image_id != null & genres != null; limit 2; sort popularity desc;`

const PROXY = 'https://cors-anywhere.herokuapp.com'

const createRequest = (url, body) => ({ url, headers: apiHeaders, body: body || apiBody, method: 'POST'})

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROXY}/https://api.igdb.com/v4` }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (body) => createRequest(`/games`, body),
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