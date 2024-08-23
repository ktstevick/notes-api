import { useState, useEffect } from 'react'

import NewNote from './components/newNote'
import Note from './components/note'

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    fetch('http://127.0.0.1:8000/notes/')
      .then((response) => response.json())
      .then((data) => setNotes(data))
  }

  useEffect(() => {
    fetchNotes()
  }, []);

  const addNote = (body) => { // Needs refinement, always generates prop.id of 101
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: body
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
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if(response.status === 200) {
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
        <NewNote addNote={addNote}/>

<hr></hr>
        <h2>Current Notes:</h2>
        <section className="notes-container">
          {notes.map((note) =>
            <Note
              key={note.id}
              id={note.id}
              body={note.body}

              deleteNote={deleteNote}
            />
          )}
        </section>
      </div>
    </>
  )
}

export default App
