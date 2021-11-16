import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";
import { NoteEditForm } from "./NoteEditForm.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js";



// Click Event One: When the user wants to edit a note, they click a button to show the edit form
// Click Event Two: Once the user is done editing a note, they click a button to save their changes

  const eventHub = document.querySelector(".print-list")

  eventHub.addEventListener("click", (eventObject) => {

    const noteId = eventObject.target.id.split("--")[1];

    if (eventObject.target.id.startsWith("editNote")) {
      // console.log("hello world")
     NoteEditForm(noteId);
    }

    if (eventObject.target.id.startsWith("deleteNote")) {
      
      deleteNote(noteId)
      .then(NoteList);
  //     // ---------- Write your code here -------------//
  //     // Call the deleteNote function and pass in the appropriate id
  //     // Then call NoteList to refresh the list of notes
  
}
  });

export const Note = (note, criminal) => {
    return `
      <section class="note-card" id="card--${note.id}>
        <h3 class="note__suspect">Suspect: ${criminal.name}</h3>
        <p class="note__text">${note.text}</p>
        <p class="note__date"><b>Date: </b> ${new Date(note.date).toLocaleDateString('en-US', { year: "numeric", day: "numeric", month: "numeric"})
      }</p>
        <section class="note__buttons">
        <button id="deleteNote--${note.id}">Delete</button>
        <button id="editNote--${note.id}">Edit</button>
        </section>
      </section>
    `
  }



