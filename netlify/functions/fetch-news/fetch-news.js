const { default: axios } = require("axios")

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const NEWSAPI_API_KEY = process.env.REACT_APP_NEWSAPI_API_KEY
  const url = `https://newsapi.org/v2/everything?q=${event.queryStringParameters.topic}`

  try {
    const { data } = await axios({
      url,
      method: 'GET', 
      headers: {
        "Authorization": NEWSAPI_API_KEY
      }
    })
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data })
    } 
  }
}

module.exports = { handler }
