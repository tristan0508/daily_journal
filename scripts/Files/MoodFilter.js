import { journalFilter } from "../JournalEntryList.js";
import { getMoods, useMoods} from "../JournalForm.js";

const domElement = document.querySelector(".head");
const eventHub = document.querySelector(".head");

export const MoodFilter = () => {
    getMoods()
    .then(() => {
        let allMoods = useMoods();
    return domElement.innerHTML = `
        <img src="images/Journal.png" alt="Logo">
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            <input type="radio" id="default" name="moodFilter" value="default" checked/>
                        <label for="mood">None</label>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" id="mood--${mood.label}"name="moodFilter" value="${ mood.id }"/>
                        <label for="mood${mood.label}">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
        `
    })
    
}


export const FilterEvent = () => {
eventHub.addEventListener("change", e => {
    const [prefix, id] = e.target.id.split("--")

    if(e.target.name === "moodFilter"){
        journalFilter(id)
    }
})
}