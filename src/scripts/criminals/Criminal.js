//Name
// Age
// Conviction
// Dates of incarceration

export const Criminal = (criminal) => {
    return `
        <div class="criminal-card col-md-4">
        <h3>${criminal.name}</h3>
        <p>Age: ${criminal.age}</p>
        <p>Crime: ${criminal.conviction}</p>
        <p>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    `
} 