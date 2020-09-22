import { deleteEntry } from "./JournalDataProvider.js";


const journal = document.querySelector('.journalEntries');


export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry${entry.id}" class="journalEntry">
            <strong>${entry.date}</strong><br>
            <strong>Topic:${entry.concept}</strong>
            <p>"${entry.entry}"</p>
            <strong>Mood:${entry.mood.label}</strong>
        </section>
        <button type="button" id="entry--${entry.id}">Delete</button>
    `
}

journal.addEventListener("click", e => {
    if(e.target.id.startsWith("entry--")){
        const [prefix, id] = e.target.id.split("--")
        deleteEntry(id)
    }
})
