import { useCriminals, getCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";
import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";

const contentTarget = document.querySelector(".print-list");
const criminalLink = document.querySelector("#criminals-nav-link");


// Retrieve all criminals and create a HTML rendered list
export const CriminalList = (filterObj) => {

    contentTarget.innerHTML = "";

    getCriminals()
    .then(() => {
        let criminalArray = useCriminals();
    
    // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
    // if (filterObj) {
    //     criminalArray = criminalArray.filter((singleCriminal) => {
    //        return singleCriminal ? singleCriminal.conviction === filterObj : false;
    //     })
    // }

    if (filterObj?.type === "Arresting") {
        criminalArray = criminalArray.filter((singleCriminal) => {
           return singleCriminal ? singleCriminal.arrestingOfficer === filterObj.value : false;
        })
    }

    criminalArray.forEach((singleCriminal) => {
        contentTarget.innerHTML += Criminal(singleCriminal);
    });
    })
    
}

// Display all criminals when its navbar link is clicked
criminalLink.addEventListener("click", function () {
    document.querySelector('.note-form-container').innerHTML = "";
    ConvictionSelect();
    OfficerSelect();
    CriminalList();
})



 

