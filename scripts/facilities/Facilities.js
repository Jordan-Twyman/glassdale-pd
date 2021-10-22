export const Facilities = (facilities)=> {
    return `
    <section class="facilities-card">
    <div id="facility__id"${facilities.id}</div>
    <div id="facility__name"${facilities.facilityName}</div>
    <div id="facility__level"${facilities.securityLevel}</div>
    <div id="facility__capacity"${facilities.capacity}</div>
    </section>
    `
}