import { Criminal } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalDataProvider.js"

const contentTarget = document.querySelector(".criminal-list")

export const CriminalList = () => {
    getCriminals()
    .then(() =>{

        let criminalsArray = useCriminals()

        let criminalHTML = "";

        criminalsArray.forEach(singleCriminalObj => {

            criminalHTML += Criminal(singleCriminalObj)
        });

        contentTarget.innerHTML = criminalHTML
    });


};