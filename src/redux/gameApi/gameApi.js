import axios from "axios"
import { insertFilter, insertSorter } from "./gameUtils"

const date = new Date()
const TODAY_YEAR = new Date(date.getFullYear(), 0).getTime()/1000
const LAST_DAY_OF_MONTH = new Date(date.getFullYear(), date.getMonth()).getTime()/1000
const LAST5YEARS = new Date(date.getFullYear() - 5, 0).getTime()/1000
const DATE_TODAY = Math.floor(date.getTime()/1000)


let PROXY 

// if (process.env.NODE_ENV === 'development') {
//   // PROXY = 'http://localhost:8010/proxy'
// } else {
  PROXY = 'https://api.igdb.com/v4'
// }

export const heroSection = `
  fields artworks.*, first_release_date, game_modes.*, name, platforms, player_perspectives.*, rating, release_dates.*, screenshots.*, similar_games, slug, storyline, summary, themes.name, total_rating, updated_at, url, videos.*, websites.*; where artworks != null & first_release_date > ${TODAY_YEAR} & rating > 75 & total_rating > 70; sort rating desc;
`

export const featuredSection = `
  fields artworks.*, cover.*, genres.*, name, platforms, screenshots, total_rating, total_rating_count, first_release_date, themes.name; where artworks != null & cover != null & genres != null & rating >= 75 & first_release_date >= ${LAST5YEARS} & total_rating >= 80 & total_rating_count >= 50; sort first_release_date desc;
`

export const popularSection = `
  fields artworks.*, cover.*, genres.*, name, platforms, screenshots, total_rating, total_rating_count, first_release_date, themes.name; where artworks != null & cover != null & genres != null & rating > 75 & first_release_date > ${TODAY_YEAR} & total_rating > 75; sort total_rating asc;
`

export const upcomingSection = `
  fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, release_dates.date, themes.name, first_release_date; where artworks != null & cover != null & genres != null & first_release_date > ${DATE_TODAY}; sort first_release_date asc;
`

export const recentlyReleasedSection = `
  fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, first_release_date, themes.name; where artworks != null & cover != null & genres != null & first_release_date < ${DATE_TODAY}; sort first_release_date desc;
`

export const topMonthSection = `
  fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, first_release_date, rating, total_rating, themes.name; where artworks != null & cover != null & genres != null & first_release_date > ${TODAY_YEAR} & first_released_date < ${LAST_DAY_OF_MONTH}; sort total_rating asc; limit 15;
`


const instance = axios.create({
  baseURL: `${PROXY}`,
  method: 'POST',
  headers: {
    "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
    "Authorization": process.env.REACT_APP_IGDB_TOKEN,
  },
})

const fetchGames = async ({ queryKey }) => {
  const { body, page, filter, request, sort } = queryKey[1]
  const offset = page && page === 1 ? 1 : ((page * 10) * 2 ) - 20
  const limit = !request && `limit ${page ? 20 : 10};` 
  const pagination = !request && `offset ${page ? offset : 1};`

  let customBody = page && insertFilter(body, filter)
  customBody = !sort ? customBody : insertSorter(customBody, sort.option, sort.order)
  
  const response = await instance({
    url: '/games',
    data: `
      ${page ? customBody : body}
      ${limit}
      ${pagination}
    `
  })
  return response.data
}

export default fetchGames

export const fetchGamesBySearch = async ({ queryKey }) => {
  const response = await instance({
    url: '/games',
    data: `fields artworks.*, cover.*, genres.*, name, platforms.*, screenshots, first_release_date, themes.name; limit 25; search "${queryKey[1]}";`
  })
  return response.data
}