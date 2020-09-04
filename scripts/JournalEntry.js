
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry${entry.id}" class="journalEntry">
            <strong>${entry.date}</strong><br>
            <strong>Topic:${entry.concept}</strong>
            <p>"${entry.entry}"</p>
            <strong>Mood:${entry.mood}</strong>
        </section>
    `
}