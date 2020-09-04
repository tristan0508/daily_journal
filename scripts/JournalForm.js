import {saveJournalEntry} from './JournalDataProvider.js';

const formComponent = document.querySelector('.mainbody');
const eventHub = document.querySelector('.mainbody');


eventHub.addEventListener('click', event => {
    

    const dateInput = document.querySelector('#journalDate');
    const conceptInput = document.querySelector('#topic');
    const entryInput = document.querySelector('#entry');
    const moodInput = document.querySelector('#mood');

    if(event.target.id === "record"){
    const newRecord = {
        date: dateInput.value,
        concept: conceptInput.value,
        entry: entryInput.value,
        mood: moodInput.value
    }
    saveJournalEntry(newRecord);
    } 
    
})



export const JournalFormComponent = () => {
    formComponent.innerHTML = `
    <h2>Daily Journal</h2>
    <form action="">
        <fieldset class="date">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class="topic">
            <label for="topic">Topic</label>
            <input type="text" name="topic" id="topic">
        </fieldset>
        <fieldset class="entry">
            <label for="entry">Entry</label>
            <textarea name="entry" id="entry" cols="40" rows="20"></textarea>
        </fieldset>
        <fieldset class="mood">
            <label for="mood">Mood for the day</label>
            <select name="mood" id="mood">
                <option value="happy">😁"Happy"</option>
                <option value="sad">😔"Sad"</option>
                <option value="okay">😏"Okay"</option>
            </select>
        </fieldset>
        <button id="record">Record Journal Entry</button>
    </form>`
};