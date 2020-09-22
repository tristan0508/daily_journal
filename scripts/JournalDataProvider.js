const eventHub = document.querySelector('.journalEntries');




const dispatchStateChangeEvent = () => {
    const newJournalRecorded = (new CustomEvent("journalStateChange"))

    eventHub.dispatchEvent(newJournalRecorded)
}

let entry;

export const useEntries = () => {
    return [...entry];
}


export const saveJournalEntry = (newJournalEntry) => {
fetch("http://localhost:8080/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    .then(getEntries) 
    .then(dispatchStateChangeEvent)

}

export const deleteEntry = (entryId) => {
    fetch(`http://localhost:8080/entries/${entryId}`, {
        method:"DELETE",
        headers: {
            "Conten-Type": "application/json"
        }
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const getEntries = () => {
    return fetch("http://localhost:8080/entries?_expand=mood") 
        .then(response => response.json())  
        .then(entries => {
            entry = entries;
            
        })
}