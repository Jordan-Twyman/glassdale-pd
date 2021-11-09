import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
import { NoteEditForm } from "./NoteEditForm.js";


// Click Event One: When the user wants to edit a note, they click a button to show the edit form
// Click Event Two: Once the user is done editing a note, they click a button to save their changes

  const eventHub = document.querySelector(".print-list")

  eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteNote")) {
      const idToDelete = eventObject.target.id.split("--")[1]
      deleteNote(idToDelete)
      .then(NoteList);
  //     // ---------- Write your code here -------------//
  //     // Call the deleteNote function and pass in the appropriate id
  //     // Then call NoteList to refresh the list of notes
       if (eventObject.target.id.startsWith("editNote")) {
        const noteId = +eventObject.target.id.split("--")[1]
        NoteEditForm(noteId);
      }
}
  });


export const Note = (notes) => {
    return `
      <section class="note-card">
        <h3 class="note__suspect">Suspect: ${notes.suspect}</h3>
        <p class="note__text">${notes.text}</p>
        <p class="note__date"><b>Date: </b> ${notes.date}</p>
        <section class="note__buttons">
        <button id="deleteNote--${notes.id}">Delete</button>
        <button id="editNote--${notes.id}">Edit</button>
        </section>
      </section>
    `
  }



