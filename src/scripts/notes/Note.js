
export const Note = (notes) => {
    return `
      <section class="note-card">
        <h3 class="note__suspect">${notes.suspect}</h3>
        <p class="note__date">${notes.date}</p>
        <p class="note__text">${notes.text}</p>
      </section>
    `;
  }