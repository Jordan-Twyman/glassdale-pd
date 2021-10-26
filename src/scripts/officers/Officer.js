export const Officer = (officers)=> {
    return `
    <section class="officer-card">
    ${officers.id}. ${officers.name}
    </section>
    `
}