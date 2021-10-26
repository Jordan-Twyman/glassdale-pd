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