import{getEntries, useEntries} from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
// const eventHub = document.querySelector('.mainbody');
const entryLog = document.querySelector(".journalEntries");




entryLog.addEventListener("journalStateChange", () => {
    EntryListComponent()
})
    





export const EntryListComponent = () => {
    getEntries()
    .then(() => {
    const entries = useEntries()
    console.log(entries)
   entryLog.innerHTML = entries.map(entry => {
       return JournalEntryComponent(entry)
    }).join("")
})
}