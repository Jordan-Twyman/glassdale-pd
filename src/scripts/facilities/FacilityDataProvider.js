let facilities = []

export const useLocations = () => {
    return facilities.slice()
}

export const getLocations = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(dirtyLocations => dirtyLocations.json())
        .then(
            cleanLocations => {
                console.table(cleanLocations)
                facilities = cleanLocations
            }
        )
} 