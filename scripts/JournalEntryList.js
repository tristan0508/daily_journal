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
   entryLog.innerHTML = entries.map(entry => {
       return JournalEntryComponent(entry)
    }).join("")
})
}

export const journalFilter = (nameOfMood) => {
    getEntries()
    .then(() => {
        const entries = useEntries()
        let filteredEntries = entries.map(mood => {
            if(mood.mood.label === nameOfMood){
                return JournalEntryComponent(mood)
            } 
        }).join("")
        entryLog.innerHTML = filteredEntries
    })
}