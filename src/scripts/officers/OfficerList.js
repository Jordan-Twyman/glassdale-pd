import { Officer } from "./Officer.js"
import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const contentTarget = document.querySelector(".print-list")

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    OfficerList()
  }) 
  
  
  export const OfficerList = () => {
    let officerHTML = '';
    getOfficers()
    .then(() => {
  
      let allTheOfficers = useOfficers();
  
      officerHTML += `
      <section class="officers">
      <h1>Officers</h1>
      <div class="officers-list flex-container">
  `;
  
      allTheOfficers.forEach(singleOfficer => officerHTML += Officer(singleOfficer));
  
         officerHTML += `
         </div>
         </section>
         `
  
      contentTarget.innerHTML = `
      ${officerHTML}`
  
    });
  };