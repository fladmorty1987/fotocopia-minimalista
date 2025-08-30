const saveButton = document.getElementById('save-button');
const noteInput = document.getElementById('note');
const notesList = document.getElementById('notes');

function saveNote() {
    const noteText = noteInput.value;
    if (noteText) {
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
        noteInput.value = '';
        localStorage.setItem('notes', notesList.innerHTML);
    }
}

function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notesList.innerHTML = savedNotes;
    }
}

saveButton.addEventListener('click', saveNote);
loadNotes();