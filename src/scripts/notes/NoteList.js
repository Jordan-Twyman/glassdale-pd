import { getNotes, useNotes } from "./NoteDataProvider.js";
import { Note } from "./Note.js";
import { NoteForm } from "./NoteForm.js";

const contentTarget = document.querySelector('.print-list');

document.querySelector('#notes-nav-link').addEventListener("click", function(){
  NoteList();
});

export const NoteList = () => {
  let noteHTML = '';

  getNotes()
  .then(() => {
    const notes = useNotes();

    noteHTML += `
      <section class="notes">
        <h1>Notes</h1>
        <div class="note-list flex-container">
    `;


    notes.forEach( noteObj => noteHTML += Note(noteObj));

    noteHTML += `
        </div>
      </section>
    `;

    contentTarget.innerHTML = `
    ${noteHTML}
    `;
  });
};

