import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js";
import { Criminal } from "../criminals/Criminal.js";
import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";
import { getLocations, useLocations } from "../facilities/FacilityDataProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js";



const contentTarget = document.querySelector(".print-list");
const criminalLink = document.querySelector("#criminals-nav-link");


export const CriminalList = (targetID, selectFilter) => {

    contentTarget.innerHTML = "";
    // Kick off the fetching of both collections of data
    getCriminals()
    .then(getLocations)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useLocations()
                const crimFac = useCriminalFacilities()
                let criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac);
            
        

        if (targetID === "crimeSelect") {
                    criminals = criminals.filter((singleCriminal) => {
                       return singleCriminal ? singleCriminal.conviction === selectFilter : false;
                    })
                } else if (targetID === "officerSelect") {
                    criminals = criminals.filter((singleCriminal) => {
                        return singleCriminal ? singleCriminal.arrestingOfficer === selectFilter : false;
                     })
                }
                criminals.forEach((singleCriminal) => {
                            contentTarget.innerHTML += Criminal(singleCriminal);
                        });})
}


const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}


// Retrieve all criminals and create a HTML rendered list
// export const CriminalFilter = (targetID,selectFilter) => {

//     contentTarget.innerHTML = "";
    
//     getCriminals()
//     .then(() => {
//         let criminalArray = useCriminals();

//     // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
//     if (targetID === "crimeSelect") {
//         criminalArray = criminalArray.filter((singleCriminal) => {
//            return singleCriminal ? singleCriminal.conviction === selectFilter : false;
//         })
//     } else if (targetID === "officerSelect") {
//         criminalArray = criminalArray.filter((singleCriminal) => {
//             return singleCriminal ? singleCriminal.arrestingOfficer === selectFilter : false;
//          })
//     }
// debugger
//     criminalArray.forEach((singleCriminal) => {
//         contentTarget.innerHTML += Criminal(singleCriminal);
//     });
//     })

    
// }




// Display all criminals when its navbar link is clicked
criminalLink.addEventListener("click", function () {
    document.querySelector('.print-list').innerHTML = "";
    ConvictionSelect();
    OfficerSelect();
    CriminalList();
})



 

