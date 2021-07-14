import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [change, setChange] = useState('')

  const handleChange = (e) => {
    setChange(e.target.value);
  }

  const handleSubmit = (e) => {
    setData({title: change})
    console.log("Change: ", change);
    console.log("Data: ", data)
  }

  function postInputs() {
    fetch('http://localhost:3001/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  useEffect(() => {
    if (data.title !== undefined) {
      postInputs()
    }
  }, [data])

  return (
    <div className="App">
      <input
        type="text"
        placeholder="TYPE SOMETHING HERE"
        value={change}
        onChange={handleChange}
      ></input>
      <button type="submit" value="submit" onClick={handleSubmit}>Click me</button>
    </div>
  );
}

export default App;
