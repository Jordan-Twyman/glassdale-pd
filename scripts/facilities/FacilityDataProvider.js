// let facilities = []

// export const useFacilities = () => {
//     return facilities.slice()
// }





// export const getFacilities = () => {
//     return fetch("https://criminals.glassdale.us/facilities")
//     .then(response => response.json())
//     .then(
//         parsedFacilities => {
//             console.table(parsedFacilities)
//             facilities= parsedFacilities
//         }
//     )
    
// }

let locationsArray = []

export const useLocations = () => {
    return locationsArray.slice()
}

export const getLocations = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(dirtyLocations => dirtyLocations.json())
        .then(
            cleanLocations => {
                console.table(cleanLocations)
                locationsArray = cleanLocations
            }
        )
} 