import axios from "axios";


const fetchNews = async () => {
  const apiKey = process.env.REACT_APP_NEWSAPI_APIKEY
  const topic = 'video+games'

  const response = await axios({
    url: `/news-api/${topic}`,
    method: 'GET',
    headers: {
      'Authorization': apiKey
    }
  })

  return response.data
}

export default fetchNews