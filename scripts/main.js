import { useEntries, getEntries }  from "./JournalDataProvider.js";
import { JournalFormComponent } from "./JournalForm.js";
import { EntryListComponent } from "./JournalEntryList.js";


JournalFormComponent();
getEntries()
.then(useEntries)
.then(EntryListComponent)


