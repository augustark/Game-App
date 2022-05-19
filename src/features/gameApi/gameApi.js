import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getPopular } from './apiBody'

const apiHeaders = {
  "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
  "Authorization": process.env.REACT_APP_IGDB_TOKEN
}

const PROXY = 'https://cors-anywhere.herokuapp.com'

const createRequest = (url, body) => ({ 
  url, 
  headers: apiHeaders, 
  method: 'POST',
  body
})

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROXY}/https://api.igdb.com/v4` }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (body) => createRequest(`/games`, body || getPopular),
    }),
    getCompany: builder.query({
      query: (ids) => createRequest(`/companies`, `fields name; where ${ids};`)
    }),
  }),
})


export const { useGetGamesQuery, useGetCompanyQuery } = gamesApi