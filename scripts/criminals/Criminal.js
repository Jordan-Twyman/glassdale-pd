//Name
// Age
// Conviction
// Dates of incarceration

export const Criminal = (criminal) => {
    return `
        <div class="col-sm-3 border border-dark m-3 list-group-item">
        <h3>${criminal.name}</h3>
        <p>Age: ${criminal.age}</p>
        <p>Crime: ${criminal.conviction}</p>
        <p>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    `
} 