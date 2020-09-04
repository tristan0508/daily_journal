import{useEntries} from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
const eventHub = document.querySelector('.mainbody');
const entryLog = document.querySelector(".journalEntries");




eventHub.addEventListener("journalStateChange", () =>
    EntryListComponent()
)




export const EntryListComponent = () => {
    
    const entries = useEntries()

    let journalHTML = "";
    for (const entry of entries) {
        journalHTML = JournalEntryComponent(entry);
        
        entryLog.innerHTML += journalHTML
    }
}