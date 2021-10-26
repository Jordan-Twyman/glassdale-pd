
export const Note = (notes) => {
    return `
      <section class="note-card">
        <p class="note__suspect">${notes.suspect}</p>
        <p class="note__text">${notes.text}</p>
        <p class="note__date"><b>Date: </b> ${notes.date}</p>
      </section>
    `;
  }