// import { Officer } from "./Officer.js"
// import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

// const contentTarget = document.querySelector("#container")

// export const OfficerList = () => {
//     getOfficers()
//     .then(() =>{

//         let officersArray = useOfficers()

//         let officerHTML = "";

//         officersArray.forEach(singleOfficerObj => {

//             officerHTML += Officer(singleOfficerObj)
//         });

//         contentTarget.innerHTML = officerHTML
//     });


// };


/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getconvictions, useConvictions } from "./ConvictionDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters-crime")

export const ConvictionSelect = () => {
    getconvictions()
    .then(() => {
        let convictions = useConvictions()
        // let convictionHTML = '';
        render(convictions)

    
    // Get all convictions from application state
    
    
});
};

const render = crimeCollection => {

    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
               crimeCollection.map((crimeObject)=> {
                   const crimeType = crimeObject.name
                    return `<option>${crimeType}</option>`
                })
            }
        </select>
    `
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    ConvictionSelect()
  }) 