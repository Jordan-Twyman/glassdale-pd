let convictions = []

export const useConvictions= () => {
    return convictions.slice()
}





export const getconvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(
        parsedConvictions => {
            console.table(parsedConvictions)
            convictions = parsedConvictions
        }
    )
    
}