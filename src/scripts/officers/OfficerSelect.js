import { useOfficers, getOfficers } from "./OfficerDataProvider.js";
import { OfficerList } from "../officers/OfficerList.js";
import { CriminalList } from "../criminals/CriminalList.js";
import { getConvictions, useConvictions } from "../convictions/ConvictionDataProvider.js";

const contentTarget = document.querySelector(".filters-officer");
const eventHub = document.querySelector("body");

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        const arresting = useOfficers();
        render(arresting);
    })
}

// eventHub.addEventListener("change", (arrestObj) => {
//     if(arrestObj.target.id === "officerSelect"){

//         const filterObj = {
//             type:"Arresting", 
//             value: arrestObj.target.value

//         }
        
//         CriminalList(filterObj)
//     }
// })

const render = (arrestCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                arrestCollection.map((officers) => {
                    const criminalName = officers.name;
                    return `<option>${criminalName}</option>`
                })
            }
        </select>
    `
}