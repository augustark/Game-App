import axios from "axios";


const fetchNews = async () => {
  const apiKey = process.env.REACT_APP_NEWSAPI_APIKEY
  // https://newsapi.org/v2/everything?q=video+games
  const response = await axios({
    url: '/news-api',
    method: 'GET',
    headers: {
      'Authorization': apiKey
    }
  })

  return response.data
}

export default fetchNews