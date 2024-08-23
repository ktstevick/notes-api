import { useState, useEffect } from 'react'

import NewNote from './components/newNote'
import Note from './components/note'

function App() {
  const [notes, setNotes] = useState([]);

  // API Calls
  const fetchNotes = () => {
    fetch('http://127.0.0.1:8000/notes/')
      .then((response) => response.json())
      .then((data) => setNotes(data))
  }

  // Only need this once
  useEffect(() => {
    fetchNotes()
  }, []);

  const addNote = (body, red, blue, green) => {
    fetch('http://127.0.0.1:8000/notes/', {
      method: 'POST',
      body: JSON.stringify({
        body: body,
        rgb_red: red,
        rgb_blue: blue,
        rgb_green: green
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setNotes((prevNotes) => [data, ...prevNotes])
      })
  };

  const deleteNote = (id) => {
    fetch(`http://127.0.0.1:8000/notes/${id}/`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 204) {
          setNotes(
            notes.filter((note) => {
              return note.id !== id;
            })
          )
        }
      })
  }

  return (
    <>
      <h1>NOTE MANAGER</h1>
      <div>
        <NewNote addNote={addNote} />

        <hr></hr>
        <h2>Current Notes:</h2>
        <section className="notes-container">
          {notes.map((note) =>
            <Note
              key={note.id}
              id={note.id}
              body={note.body}

              red={note.rgb_red}
              blue={note.rgb_blue}
              green={note.rgb_green}

              deleteNote={deleteNote}
            />
          )}
        </section>
      </div>
    </>
  )
}

export default App
