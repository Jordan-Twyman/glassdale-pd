import { Facilities } from "./Facilities.js"
import { getFacilities, useFacilities } from "./FacilityDataProvider.js"

const contentTarget = document.querySelector(".facilities-list")

export const FacilityList = () => {
    getFacilities()
    .then(() =>{

        let facilitiesArray = useFacilities()

        let facilityHTML = "";

        facilitiesArray.forEach(singleFacilityObj => {

            facilityHTML += Facilities(singleFacilityObj)
        });

        contentTarget.innerHTML = facilityHTML
    });


};