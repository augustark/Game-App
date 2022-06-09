const { default: axios } = require("axios")

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID
  // const TWITCH_CLIENT_SECRET = process.env.REACT_APP_TWITCH_CLIENT_SECRET
  const TWITCH_AUTH_TOKEN = process.env.REACT_APP_TWITCH_AUTH_TOKEN

  // const getAccessToken = async () => {
  //   const tokenRes = await axios({
  //     url: `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
  //     method: 'POST'
  //   })
  //   const tokenJson = await tokenRes.data
  //   console.log(tokenJson)
  //   return tokenJson.access_token
  // }
  // const accessToken = getAccessToken()

  try {
    const { data } = await axios({
      url: 'https://api.igdb.com/v4/games',
      method: 'POST', 
      headers: {
        "Client-ID": TWITCH_CLIENT_ID,
        "Authorization": TWITCH_AUTH_TOKEN
      },
      data: event.body
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