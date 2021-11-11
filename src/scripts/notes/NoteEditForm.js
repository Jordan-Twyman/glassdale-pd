import {useNotes, updateNote} from "./NoteDataProvider.js"
import { NoteForm } from "./NoteForm.js"
import { NoteList } from "./NoteList.js"

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".note-form-container")



    contentTarget.addEventListener("click", (event) => {
        if(event.target.id.startsWith("saveNoteChanges")){
    
    
            // Make a new object representation of a note
            const editedNote = {
                id: event.target.id.split('-')[1], // how can you get the note's id?
                text: document.querySelector('#note-text').value, // get value of text from input
                suspect: document.querySelector('#note-suspect').value, // get value of suspect from input,
                date: document.querySelector('#note-date').value // get value of date from input
            }
    
            document.querySelector('#note-date').value = '';
            document.querySelector('#note-suspect').value = '';
            document.querySelector('#note-text').value = '';
            // Send to json-server and refresh the list
            updateNote(editedNote).then(NoteList);
            NoteForm();
    
        }
    })
      
    export const NoteEditForm = (noteId) => {
        // Give this component access to our application's notes state
        const allNotes = useNotes();
    
        // Find the note that we clicked on by its unique id
        const noteObject = allNotes.find(singleNote=> singleNote.id === parseInt(noteId))

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date" value="${noteObject.date}" />
        <input type="text" value="${noteObject.text}" id="note-text" />
        <input type="text" value="${noteObject.suspect}" id="note-suspect" />
        <button id="saveNoteChanges-${noteId}">Save Changes</button>
    `
}

