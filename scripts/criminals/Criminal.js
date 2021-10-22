export const Criminal = (criminals)=> {
    return `
    <section>
    ${criminals.name}
    </section>
    <section>
    ${criminals.age}
    </section>
    <section>
    ${criminals.conviction}
    </section>
    <section>
    ${new Date(criminals.incarceration.start).toLocaleDateString('en-US')}
    </section>
    `
}