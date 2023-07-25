// To move text upwards when inputting on form

//JS for making inputs look nice
const inputs = document.querySelectorAll(".input-field");

inputs.forEach(inp =>{
    inp.addEventListener("focus", ()=>{
        inp.classList.add("active");
    })
    inp.addEventListener("blur", ()=>{
        if (inp.value != "") return;
        inp.classList.remove("active")
    })
})


//JS for priority input + displaying stars selected
const stars = document.querySelectorAll(".stars");
const star1 = document.querySelector(".one")
const star2 = document.querySelector(".two")
const star3 = document.querySelector(".three")
let priority = []

stars.forEach(star =>{    
    star.addEventListener("click", ()=>{
        removeStars();
        priority.pop();
        if (star.classList[1] === "one"){
            star1.classList.add("checked")
            priority.push(1)
        }
        else if (star.classList[1] === "two"){
            star1.classList.add("checked");
            star2.classList.add("checked");
            priority.push(2)
        }
        else if (star.classList[1] === "three"){
            star1.classList.add("checked");
            star2.classList.add("checked");
            star3.classList.add("checked");
            priority.push(3)
        }
        console.log(priority);
    })
})

function removeStars(){
    star1.classList.remove("checked");
    star2.classList.remove("checked");
    star3.classList.remove("checked");
}


//JS to make notes and checklist pop up + gather input
const notes = document.querySelectorAll(".notes");
const noteText = document.querySelector("textarea");
let taskNotes;
// const notesCancel = document.querySelector(".")
const notesPopOut = document.querySelector(".notes-pop-out");
const checklist = document.querySelector(".checklist");


notes.forEach((note)=>{
    note.addEventListener("click",(e)=>{
        e.preventDefault();
        if (note.classList[0] === "open"){
            notesPopOut.classList.remove("inactive");
        }
        if(note.classList[0] === "add-notes"){
            notesPopOut.classList.add("inactive");
            return taskNotes = noteText.value;            
        }
        if (note.classList[0] === "cancel"){
            notesPopOut.classList.add("inactive");
        }
    })
})


let subtasks;

// when submit button pressed, retrieve information from form.

const form = document.querySelector("form");
let mainTaskArray = [];
let taskName;
let taskDesc;
let dueDate;
const modalBG = document.querySelector(".modal-bg");
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    // modalBG.classList.add("inactive");
    if (priority[0] === undefined) {priority[0] = 1;} 
    let formElements = Array.from(form.elements);
    formElements.forEach(element => {
        if (element.id === "task-name"){
            taskName = element.value;
        }else if (element.id === "desc"){
            taskDesc = element.value;
        }else if (element.id === "due-date"){
            dueDate = new Date(element.value);
            if(element.value === ""){dueDate = undefined}
        }       
    })
    let newInput = new FormInput(taskName, taskDesc, dueDate, priority, taskNotes, subtasks);
    mainTaskArray.push(newInput);
    console.log(mainTaskArray);
    form.reset();
    emptyTextArea();
})


//create an object to contain all the input
function FormInput (taskName, taskDesc, dueDate, priority, taskNotes, subtasks) {
    this.taskName = taskName, 
    this.taskDesc = taskDesc ,
    this.dueDate = dueDate,
    this.priority = priority[0],
    this.taskNotes = taskNotes,
    this.subtasks = subtasks
}


function emptyTextArea(){
    noteText.value = "";
}