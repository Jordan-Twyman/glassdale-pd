export const Criminal = (criminals)=> {
    return `
    <section class="criminal-card">
    <section class= "criminal__name">
    <b>${criminals.name}
    </section><br></br>
    <section  class= "criminal__age">
    Age: ${criminals.age}
    </section>
    <section  class= "criminal__crime">
    Crime: ${criminals.conviction}
    </section>
    <section = "criminal__date">
    <div>Term Start: ${new Date(criminals.incarceration.start).toLocaleDateString('en-US')}</div>
    <div>Term End: ${new Date(criminals.incarceration.end).toLocaleDateString('en-US')}</div>
    </section></div></b></section>
    `
}