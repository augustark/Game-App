import axios from "axios";

let PROXY

if (process.env.NODE_ENV === 'development') {
  PROXY = 'https://newsapi.org/v2/'
} else {
  PROXY = '/news/'
}

const fetchNews = async () => {
  const apiKey = process.env.REACT_APP_NEWSAPI_APIKEY
  const topic = 'video+games'

  const response = await axios({
    url: `${PROXY}everything?q=${topic}`,
    method: 'GET',
    headers: {
      'Authorization': apiKey
    }
  })

  return response.data
}

export default fetchNews