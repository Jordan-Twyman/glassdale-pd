
export const Note = (notes) => {
    return `
      <section class="note-card">
        <h3 class="note__suspect">${notes.suspect}</h3>
        <p class="note__text">${notes.text}</p>
        <p class="note__date"><b>Date: </b> ${notes.date}</p>
        <button id="deleteNote--${noteObject.id}">Delete</button>
      </section>
    `;
  }

  const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("delete-note")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
  }
});

