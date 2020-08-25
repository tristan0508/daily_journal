/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
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