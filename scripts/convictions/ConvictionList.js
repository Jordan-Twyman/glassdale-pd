import { Officer } from "./Officer.js"
import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const contentTarget = document.querySelector("#container")

export const OfficerList = () => {
    getOfficers()
    .then(() =>{

        let officersArray = useOfficers()

        let officerHTML = "";

        officersArray.forEach(singleOfficerObj => {

            officerHTML += Officer(singleOfficerObj)
        });

        contentTarget.innerHTML = officerHTML
    });


};