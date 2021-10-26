import { Criminal } from "./Criminal.js";
import { useCriminals, getCriminals } from "./CriminalDataProvider.js";

const contentTarget = document.querySelector(".print-list")

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  CriminalList()
}) 


export const CriminalList = () => {
  let criminalHTML = '';
  getCriminals()
  .then(() => {

    let allTheCriminals = useCriminals();

    criminalHTML += `
    <section class="notes">
    <h1>Criminals</h1>
    <div class="note-list flex-container">
`;

    allTheCriminals.forEach(singleCriminal => criminalHTML += Criminal(singleCriminal));

       criminalHTML += `
       </div>
       </section>
       `

    contentTarget.innerHTML = `
    ${criminalHTML}`

  });
};




 

