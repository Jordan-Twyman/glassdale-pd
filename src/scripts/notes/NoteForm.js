import { NoteList } from "./NoteList.js";
import { saveNote } from "./NoteDataProvider.js";
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js";


const contentTarget = document.querySelector('.note-form-container');

window.onload = () => {
  const clickEvent = document.querySelector('#saveNote');

  // Handler function for saving a note
 
  clickEvent.addEventListener("click", event => {
    if (event.target.id === "saveNote") {

      event.preventDefault();

      // Convert the date from it's default value
      const noteDate = new Date(document.querySelector('#note-date').value).toLocaleDateString('en-US');
      
      const newNote = {
        date: noteDate,
        criminalId: parseInt(document.querySelector('#noteForm').value),
        text: document.querySelector('#note-text').value
      }

      // Clear form values after creating form body data
      document.querySelector('#note-date').value = '';
      document.querySelector('#note-suspect').value = '';
      document.querySelector('#note-text').value = '';



      // If any of the form values are empty then display where valid information is needed
      if (newNote.date === 'Invalid Date' || newNote.criminalId === '' || newNote.text === '') {
        alert('Please enter valid values')

      // Otherwise we can go ahead and make this a new note
      } else {



        saveNote(newNote)
        .then(NoteList);
      }
    }
  });
}

export const NoteForm = () => {
  getCriminals()
  .then(() => {
    const criminalsArray = useCriminals();
  contentTarget.innerHTML = `
  <form>
    <div>
      <label>Date:</label>
    </div>
      <input type="date" id="note-date">
    <div>
      <label>Suspect:</label>
    </div>
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="0">Select a criminal..</option>
    ${
      criminalsArray.map((criminal) => {
          return `<option value="${criminal.id}">${criminal.name}</option>`
      })
  }
</select>
    <div>
      <label>Note:</label>
    </div>
      <textarea id="note-text" placeholder="note text"></textarea>
    <div>
      <button id="saveNote">Save Note</button>
    </div>
  </form>
  `;
})
}
