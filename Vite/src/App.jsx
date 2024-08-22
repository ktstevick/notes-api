import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Note from './components/note'

function App() {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite, React, and Me</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + interval)}>
          +
        </button>
        <p> count is {count} </p>
        <button onClick={() => setCount((count) => count - interval)}>
          -
        </button>
        <p>
          currently counting by {interval}
        </p>
        <button onClick={() => setInterval((interval) => interval * 2)}>DOUBLE INTERVAL</button>

        <section className="notes-container">
          <h2>Notes</h2>
          <Note />
        </section>
      </div>
    </>
  )
}

export default App
