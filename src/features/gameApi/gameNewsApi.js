import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': '3f5e1b41damshdb36aa29d2e93d3p1665e3jsn5bd24713161a'
}

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders }) 

export const gameNewsApi = createApi({
  reducerPath: 'gameNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com'}),
  endpoints: (builder) => ({
    getGameNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}&originalImg=true`)
    })
  })
})

export const { useGetGameNewsQuery } = gameNewsApi