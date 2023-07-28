import { makeInputPretty } from "./input.js";
import { starsArr } from "./input.js";


export let addTask = function(){
    const addTaskBtn = document.querySelector(".add-task");
    addTaskBtn.addEventListener("click", newTaskModal.render);
}

let addNotes = function(){
    const notesBtn = document.querySelector(".notes-btn");
    notesBtn.addEventListener("click", newNotesModal.render);
    closeBtn();
}
let addSubtask = function(){
    const subtaskBtn = document.querySelector(".subtask-btn");
    subtaskBtn.addEventListener("click", newSubtaskModal.render);
}

let closeBtn = function(){
    const closeBtns= document.querySelectorAll(".close");
    closeBtns.forEach(btn =>{
        btn.addEventListener("click", closeFn )
    })
}

const closeFn = function (){
    console.log("Hello")
    
}


const newTaskModal = {
render: () =>{
    let modal = document.querySelector(".modal");
    let template = document.getElementById("newtask-modal-template");
    let div = template.content.cloneNode(true);
    modal.classList.remove("inactive");
    modal.append(div);
    makeInputPretty();
    starsArr();
    addNotes();
    addSubtask();
    closeBtn();
}}

const newNotesModal = {
render: () =>{
    let modal = document.querySelector(".modal");
    let template = document.getElementById("notes-modal-template");
    let div = template.content.cloneNode(true);
    modal.append(div);
    console.log(div);
}}

const newSubtaskModal = {
    render: () =>{
        console.log("subtask");
        // let modal = document.querySelector(".modal");
        // let template = document.getElementById("notes-modal-template");
        // let div = template.content.cloneNode(true);
        // modal.append(div);
        // console.log(div);
    }}