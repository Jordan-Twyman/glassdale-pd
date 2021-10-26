
import { Location } from "./Facilities.js";
import { useLocations, getLocations } from "./FacilityDataProvider.js";

const contentTarget = document.querySelector(".print-list")


document.querySelector("#facilities-nav-link").addEventListener("click", () => {
  LocationList()
}) 


export const LocationList = () => {
  let facilityHTML = '';
  getLocations()
  .then(() => {

    let allTheFacilities = useLocations();

    facilityHTML += `
    <section class="facilities">
    <h2>Facilties</h2>
    <div class="facilities-list flex-container">
`;

    allTheFacilities.forEach(singleFacility => facilityHTML += Location(singleFacility));

       facilityHTML += `
       </div>
       </section>
       `

    contentTarget.innerHTML = `
    ${facilityHTML}`

  });
};