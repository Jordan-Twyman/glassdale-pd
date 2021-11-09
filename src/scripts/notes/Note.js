import { deleteNote } from "./NoteDataProvider.js";
import { NoteList } from "./NoteList.js";


  const eventHub = document.querySelector(".print-list")

  eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("deleteNote")) {
      const idToDelete = eventObject.target.id.split("--")[1]
      deleteNote(idToDelete)
      .then(NoteList);
  //     // ---------- Write your code here -------------//
  //     // Call the deleteNote function and pass in the appropriate id
  //     // Then call NoteList to refresh the list of notes
    }
  });


export const Note = (notes) => {
    return `
      <section class="note-card">
        <h3 class="note__suspect">${notes.suspect}</h3>
        <p class="note__text">${notes.text}</p>
        <p class="note__date"><b>Date: </b> ${notes.date}</p>
        <section class="note__buttons">
        <button id="deleteNote--${notes.id}">Delete</button>
        <button id="edit--${notes.id}">Edit</button>
        </section>
      </section>
    `
  }



