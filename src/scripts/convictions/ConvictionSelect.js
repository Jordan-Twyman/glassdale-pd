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
import { CriminalList } from "../criminals/CriminalList.js";
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

  // This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("body")
eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the body element")

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)

    if(event.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        CriminalList (eventObject.target.value)
     
        // Your code goes here!
    }
})


let crimeSelectArray = CriminalList.filter ((currentCrime) => {
        return currentCrime.conviction = eventObject.target.value}