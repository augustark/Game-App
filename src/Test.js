import React from 'react'

function Test() {
  const [msg, setMsg] = React.useState("click the button")
  const handler = () =>
    fetch("https://icanhazdadjoke.com/", { headers: { accept: "Accept: application/json" } })
      .then((x) => x.json())
      .then(({ msg }) => setMsg(msg))

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