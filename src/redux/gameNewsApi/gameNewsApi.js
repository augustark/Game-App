import axios from "axios";


const fetchNews = async () => {
  const apiKey = process.env.REACT_APP_NEWSAPI_APIKEY
  const topic = 'video+games'

  const response = await axios({
    url: `https://newsapi.org/v2/everything?q=${topic}`,
    method: 'GET',
    headers: {
      'Authorization': apiKey
    }
  })

  return response.data
}

export default fetchNews