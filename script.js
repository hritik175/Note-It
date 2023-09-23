const notesContainer = document.querySelector('.notes-container');
const notesBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.textfield');

notesBtn.addEventListener('click', createNote);

function createNote(){
    let textField = document.createElement('p');
    let deleteBtn = document.createElement('img')

    textField.className = "textfield";
    textField.setAttribute("contenteditable", "true")
    
    deleteBtn.src= "images/delete.png";
    notesContainer.appendChild(textField).appendChild(deleteBtn)
    saveNotes();
}


notesContainer.addEventListener('click', (event)=>{
   if(event.target.tagName === "IMG"){
        event.target.parentElement.remove();
        saveNotes();
   }else if(event.target.tagName === "P"){
        notes = document.querySelectorAll('.textfield');
        notes.forEach( note => {note.onkeyup = function(){
            saveNotes();
            console.log("note saved")
        }})
   }
})

notesContainer.addEventListener('input', (e)=>{
    if(e.target.classList.contains('textfield')){
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        saveNotes()
    }
})











function saveNotes(){
    localStorage.setItem('notes', notesContainer.innerHTML);
    
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();