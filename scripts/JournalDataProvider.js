const eventHub = document.querySelector('.mainbody');




const dispatchStateChangeEvent = () => {
    const newJournalRecorded = (new CustomEvent("journalStateChanged"))

    eventHub.dispatchEvent(newJournalRecorded)
}

let entry;

export const useEntries = () => {
    return entry.slice();
}


export const saveJournalEntry = (newJournalEntry) => {
fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    .then(getEntries) 
    .then(dispatchStateChangeEvent)

}


export const getEntries = () => {
    return fetch("http://localhost:8088/entries") 
        .then(response => response.json())  
        .then(entries => {
            entry = entries;
            
        })
}