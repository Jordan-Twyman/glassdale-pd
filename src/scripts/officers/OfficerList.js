import { Officer } from "./Officer.js"
import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const contentTarget = document.querySelector(".print-list")

export const OfficerList = () => {
    getOfficers()
    .then(() =>{

        let officersArray = useOfficers()

        let officerHTML = "";

        officersArray.forEach(singleOfficerObj => {

            officerHTML += Officer(singleOfficerObj)
        });

        contentTarget.innerHTML =` 
        <h2>Officers</h2> ${officerHTML}
        `
    });


};

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    
    OfficerList()
     // invoke the function that prints the criminals
 })
