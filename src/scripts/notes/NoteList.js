import { Note } from "./Note.js";
import { getNotes,useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector('.print-list');

document.querySelector('#notes-nav-link').addEventListener("click", function(){
  NoteList();
});

// Retrieve all officers and create a HTML rendered list
export const NoteList = () => {
    let noteListHTML = "";
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notesArray = useNotes();
        const criminalsArray = useCriminals();

        noteListHTML += `
        <section class="notes">
        <h1>Notes</h1>
        <div class="notes-list flex-container">`;
        
        notesArray.map(note => {
            const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)
            noteListHTML += Note(note,relatedCriminal);
            contentTarget.innerHTML = `${noteListHTML}`
        
        })
    })
}

// Display all officers when its navbar link is clicked
