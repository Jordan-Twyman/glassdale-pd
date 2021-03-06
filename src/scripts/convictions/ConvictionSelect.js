import { useConvictions, getConvictions } from "./ConvictionDataProvider.js";
import { CriminalList } from "../criminals/CriminalList.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";


const contentTarget = document.querySelector(".filters-crime");
const eventHub = document.querySelector("body");

export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
        const convictions = useConvictions();
        render(convictions);
    })
}

eventHub.addEventListener("change", (eventObj) => {
    if(eventObj.target.id === "crimeSelect"){
        CriminalList("crimeSelect", eventObj.target.value)

        
    } else if (eventObj.target.id === "officerSelect") {
        CriminalList("officerSelect", eventObj.target.value)
    }
})

const render = (convictionsCollection) => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((conviction) => {
                    const convictionName = conviction.name;
                    return `<option>${convictionName}</option>`
                })
            }
        </select>
    `
}