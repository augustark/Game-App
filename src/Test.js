import React, { useState } from 'react'

function Test() {
  const [msg, setMsg] = useState('')
  const handler = () => {
    fetch('/games', {
      method: 'POST',
      header: {
        "Client-ID": process.env.REACT_APP_IGDB_CLIENT_ID,
        "Authorization": process.env.REACT_APP_IGDB_TOKEN
      },
      body: 'fields name;'
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>message: {msg}</p>
        <button onClick={handler}> click meeee</button>
      </header>
    </div>
  )
}

export default Test