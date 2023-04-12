import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNmY5ZjgzMzk2YTJiNzJiM2IzOWU4In0sImlhdCI6MTY4MDUzODEzM30.hL-puCehWCblYJTYjL6cERW3WNoXClJ2KVcAGsmMQ7w"
        // "auth-token": localStorage.getItem('token')
        
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
    
  }

  // Add a Note
  const addNote = async (name, id, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNmY5ZjgzMzk2YTJiNzJiM2IzOWU4In0sImlhdCI6MTY4MDUzODEzM30.hL-puCehWCblYJTYjL6cERW3WNoXClJ2KVcAGsmMQ7w"
        // "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({name, id, tag})
    });
    console.log(response)
    const note = await response.json();
    setNotes(notes.concat(note))
    
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNmY5ZjgzMzk2YTJiNzJiM2IzOWU4In0sImlhdCI6MTY4MDUzODEzM30.hL-puCehWCblYJTYjL6cERW3WNoXClJ2KVcAGsmMQ7w"
        // "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json();
    console.log(json)
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
 
    
    return (
      <NoteContext.Provider value={{notes, addNote,deleteNote,getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;