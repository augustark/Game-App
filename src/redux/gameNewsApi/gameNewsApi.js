import axios from "axios"

const fetchNews = async () => {
  const response = await axios({ url: './netlify/functions/fetch-news?topic="video+games"'})
  return response.data
}

export default fetchNews