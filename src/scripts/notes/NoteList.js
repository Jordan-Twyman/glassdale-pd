import { Note } from "./Note.js";
import { getNotes,useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"

const notesNavigation = document.querySelector('#notes-nav-link');
const contentTarget = document.querySelector(".print-list");

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
            contentTarget.innerHTML = `
            <h2 class="heading">Notes</h2>
            ${noteListHTML}
        `
        })
    })
}

// Display all officers when its navbar link is clicked
notesNavigation.addEventListener("click", function () {
    document.querySelector('.filters-crime').innerHTML = "";
    NoteForm();
    NoteList();
 })
