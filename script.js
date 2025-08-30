// Botón para guardar la nota
const saveButton = document.getElementById('save-button');
// Entrada de texto para la nota
const noteInput = document.getElementById('note');
// Lista para mostrar las notas guardadas
const notesList = document.getElementById('notes');

// Función para guardar la nota
function saveNote() {
    const noteText = noteInput.value;
    if (noteText) {
        const li = document.createElement('li');
        li.textContent = noteText;
        notesList.appendChild(li);
        noteInput.value = '';
        // Guardar la lista de notas en localStorage
        try {
            localStorage.setItem('notes', notesList.innerHTML);
        } catch (e) {
            console.error('Error guardando notas en localStorage:', e);
        }
    } else {
        console.warn('No se puede guardar una nota vacía.');
    }
}

// Función para cargar notas guardadas desde localStorage al iniciar el script
function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        // Cargar las notas almacenadas en la lista
        notesList.innerHTML = savedNotes;
    }
}

// Agregar evento al botón para guardar la nota
saveButton.addEventListener('click', saveNote);
// Cargar notas al iniciar el script
loadNotes();