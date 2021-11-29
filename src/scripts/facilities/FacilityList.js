
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";
import { Location } from "./Facilities.js";
import { useLocations, getLocations } from "./FacilityDataProvider.js";


const contentTarget = document.querySelector(".print-list");


document.querySelector("#facilities-nav-link").addEventListener("click", () => {
  LocationList()
}) 




export const LocationList = () => {
  let html = '';
  
  getLocations()
  .then(getCriminals)
  .then(getCriminalFacilities)
  .then(() => {

    const facilities = useLocations();
    const criminals = useCriminals();
    const criminalFacilities = useCriminalFacilities();

    html += `
    <!-- Begin Facility List -->
    <section class="facilities">
      <h2>Facilities</h2>
      <div class="facility-list flex-container">
    `;

    html += render(facilities, criminals, criminalFacilities);

    html += `
      </div>
    </section>
    `;
    
    contentTarget.innerHTML = html;
  });

}

const render = (facilitiesToRender, allCriminals, allRelationships) => {
  return facilitiesToRender.map(facility => {
    const criminalsFacilities = allRelationships.filter(cf => cf.facilityId === facility.id);
    const criminals = criminalsFacilities.map(cf => allCriminals.find(criminal => criminal.id === cf.criminalId));
    return Location(facility, criminals);
  }).join('');
}