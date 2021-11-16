import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { Note } from "./Note.js"
import {useNotes, updateNote, getNotes} from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"


// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.




   
      
    export const NoteEditForm = (noteId) => {
        const contentTarget = document.querySelector(`.note-form-container`)
        
        
        const allNotes = useNotes();
        const criminalsArray = useCriminals();

        // Give this component access to our application's notes state
        
    
        // Find the note that we clicked on by its unique id
        // const noteObject = notesArray.find(noteObject=> noteObject.id === parseInt(noteId))

        const noteEdit = allNotes.find(note => note.id === noteId)
    
       debugger
        
    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <form>
        <h2>Edit Note</h2>
        <div class="col-sm-3 border border-dark m-3 list-group-item w-50">
        <select id="criminalEdit-FK" class="form-control criminalSelect">
            <option value="0">Please select a Criminal</option>
             ${criminalsArray.map(x => x.id === noteEdit.criminalId ? `<option selected value="${ x.id }">${ x.name }</option>`: `<option value="${ taco.id }">${ taco.name }</option>` )}
        </select>
        <input class="form-control" type="date" id="edit-date" value="${noteEdit.date}" />
        <input class="form-control" placeholder="leave a note ..." type="text" value="${noteEdit.text}" id="edit-text" />
        <button id="saveNoteChanges-${noteId}">Save Changes</button>
        </div>
        </form>
    `

    contentTarget.addEventListener("click", (event) => {
        if(event.target.id.startsWith("saveNoteChanges")){
    
    
            // Make a new object representation of an edited note
            const editedNote = {
                id: event.target.id.split('-')[1], // how can you get the note's id?
                text: document.querySelector('#edit-text').value, // get value of text from input
                criminalId: parseInt(document.querySelector('#criminalEdit-FK').value), // get value of suspect from input,
                date: document.querySelector('#edit-date').value // get value of date from input
            }

            console.log(editedNote)
    
            document.querySelector('#edit-date').value = '';
            document.querySelector('#edit-text').value = '';

            if (editedNote.date === 'Invalid Date' || editedNote.criminalId === "0" || editedNote.text === '') {
                alert('Please enter valid input values')
        
              // Otherwise we can go ahead and update this a new note
              } else {
            // Send to json-server and refresh the list
            updateNote(editedNote).then(NoteList);
            // NoteForm();
              }
        }
    })
}
    
