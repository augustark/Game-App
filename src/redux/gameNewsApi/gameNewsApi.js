import axios from "axios";


const fetchNews = async () => {
  const apiKey = process.env.REACT_APP_NEWSAPI_APIKEY

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