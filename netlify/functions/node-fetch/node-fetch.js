const fetch = require('node-fetch')

const handler = async function () {
  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'POST',
    header: {
      "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
      "Authorization": process.env.REACT_APP_IGDB_TOKEN
    },
    body: 'fields name;'
  })

  const data = response.json()
  return data
}

module.exports = { handler }

// const handler = async function () {
//   try {
//     const response = await fetch('https://icanhazdadjoke.com', {
//       headers: { Accept: 'application/json' },
//     })
//     if (!response.ok) {
//       // NOT res.status >= 200 && res.status < 300
//       return { statusCode: response.status, body: response.statusText }
//     }
//     const data = await response.json()

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ msg: data.joke }),
//     }
//   } catch (error) {
//     // output to netlify function log
//     console.log(error)
//     return {
//       statusCode: 500,
//       // Could be a custom message or object i.e. JSON.stringify(err)
//       body: JSON.stringify({ msg: error.message }),
//     }
//   }
// }

// module.exports = { handler }
