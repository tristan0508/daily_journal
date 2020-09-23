import { useEntries, getEntries }  from "./JournalDataProvider.js";
import { JournalFormComponent } from "./JournalForm.js";
import { EntryListComponent } from "./JournalEntryList.js";
// import { FilterBar } from "./Files/FilterBar.js";
import { FilterEvent, MoodFilter } from "./Files/MoodFilter.js";


JournalFormComponent();
getEntries()
.then(useEntries)
.then(EntryListComponent)
MoodFilter()
FilterEvent()

