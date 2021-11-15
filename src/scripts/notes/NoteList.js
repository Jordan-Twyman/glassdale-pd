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
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notesArray = useNotes();
        const criminalsArray = useCriminals();
        let noteListHTML = "";
        notesArray.map(note => {
            const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)
            noteListHTML += Note(note,relatedCriminal);
            contentTarget.innerHTML = `<section class="note-list-container">
            <h1 class="heading">Notes</h1>
            ${noteListHTML}
            </section>
        `
        })
    })
}

// Display all officers when its navbar link is clicked
