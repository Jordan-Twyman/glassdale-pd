import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerList } from "./officers/OfficerList.js";
import { LocationList } from "./facilities/FacilityList.js";
import { NoteList } from "./notes/NoteList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { getCriminals } from "./criminals/CriminalDataProvider.js";


NoteForm();
NoteList();
getCriminals()
    .then(getCriminals)
    .then(NoteList);