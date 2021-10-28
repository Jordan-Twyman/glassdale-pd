let notes = [];

export const useNotes = () => {
  return notes.slice();
}


export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
      .then(response => response.json())
      .then(parsedNotes => {
          notes = parsedNotes
      })

}

export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes) // After we add a note, get them all again so our new note appears in our collection
}

const deleteNote = noteId => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
      method: "DELETE"
  })
}
