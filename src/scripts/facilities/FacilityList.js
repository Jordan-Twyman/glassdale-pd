
import { Location } from "./Facilities.js";
import { useLocations, getLocations } from "./FacilityDataProvider.js";

const contentTarget = document.querySelector(".print-list")

export const LocationList = () => {
  getLocations()
  .then(() => {

    let allTheLocations = useLocations();

    let locationHTML = "";

    allTheLocations.forEach((singleLocation) => {

        locationHTML += Location(singleLocation);

    });

    contentTarget.innerHTML =    
    `
    <h2>Facilities</h2>
    ${locationHTML}
    `

  });
};

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
  LocationList()
}) 