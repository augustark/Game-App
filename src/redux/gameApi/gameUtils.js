import {
  popularSection,
  featuredSection,
  upcomingSection,
  recentlyReleasedSection
} from './gameApi';

export const navigate = (id) => {
    switch(id) {
    case 'popular':
      return  {title: 'Popular Games', page: 1, body: popularSection}
    case 'coming_soon':
      return {title: 'Upcoming Games', page: 1, body: upcomingSection}
    case 'recently_released':
      return {title: 'Recently Released', page: 1, body: recentlyReleasedSection}
    default:
      return {title: 'Games', page: 1, body: featuredSection}
  }
}

export function insertFilter(body, filterObj) {
  const splittedStr = body.split(' ')
  const index = splittedStr.indexOf('where') + 1
  
  let filterStr = ''

  const { platforms, genres } = filterObj

  if (!platforms.length && !genres.length) {
    return body
  }
  else if (platforms.length && !genres.length) {
    filterStr = `platforms = [${platforms}] &`
  }
  else if (!platforms.length && genres.length) {
    filterStr = `genres = [${genres}] &`
  }
  else {
    filterStr = `(platforms = [${platforms}] & genres = [${genres}]) &`
  }

  return [
    ...splittedStr.slice(0, index), 
    filterStr, 
    ...splittedStr.slice(index)
  ].join(' ')
}

export function insertSorter(body, val, order = 'desc') {
  if (!val) return body
  
  let sortVal = ''
  
  switch(val.toLowerCase()) {
      case 'title':
          sortVal = 'name'
          break;
      case 'release date':
          sortVal = 'first_release_date' 
          break;
      default:
          sortVal = 'total_rating'
          break;
  }
  
  let splitBody = body.split(' ')
  const indexOfSort = splitBody.indexOf('sort')
  const replaceSort = [
      ...splitBody.slice(0, indexOfSort + 1), 
      sortVal, order + ';',
      ...splitBody.slice(indexOfSort + 3) 
  ].join(' ')
  
  return replaceSort
}