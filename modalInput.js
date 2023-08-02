import { makeInputPretty, closeCancelBtn, closeFn, formInput } from "./input.js";
import { pubsub } from "./pubsub.js";
import { renderAddedItemsOnSubtask } from "./render.js";


export let addTask = function(){
    const addTaskBtn = document.querySelector(".add-task");
    addTaskBtn.addEventListener("click", newTaskModal.render);
}


export const newTaskModal = {
priorityInput: [0],
notesInput: [],
subtaskInput: [],
render: () =>{
    let modal = document.querySelector(".modal");
    let template = document.getElementById("newtask-modal-template");
    let div = template.content.cloneNode(true);
    modal.classList.remove("inactive");
    modal.append(div);
    makeInputPretty();
    newTaskModal.starsArr();
    newTaskModal.addTask();


    newTaskModal.addNotes();
    newTaskModal.addSubtask();
    
    closeCancelBtn();

},
add: ev =>{
    ev.preventDefault();
    ev.stopPropagation();
    let taskName;
    let taskDesc;
    let taskDueDate;
    let taskPriority = newTaskModal.priorityInput[0];
    let taskCategory;
    let taskNotes = newTaskModal.notesInput[0];
    let taskSubtasks = newTaskModal.subtaskInput[0];
    let inputs = document.querySelectorAll(".input-field");
    inputs.forEach(input => {
        if (input.id === "task-name-input"){
            taskName = input.value;
        } else if (input.id === "desc-input"){
            taskDesc = input.value;
        } else if (input.id === "due-date-input"){
            taskDueDate = input.value;
        } else if (input.id === "project"){
            taskCategory = input.value;
        }
    })
    console.log(taskName, taskDesc ,taskDueDate, taskCategory, taskPriority, taskNotes);
    let obj =  {
        taskName, taskDesc, taskDueDate, taskPriority, taskCategory, taskNotes, taskSubtasks
    }
    let task = new formInput.Task(obj)
    // pubsub.publish('taskAdded', task);
    console.log(task);
},
addTask: () =>{
    let div = document.querySelector(".submit-task-btn");
    div.addEventListener("click", newTaskModal.add);
},
starsArr: () => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) =>{
        star.addEventListener("click", ()=>{
            if (star.classList[0] === "one") {
                newTaskModal.priorityInput.pop();
                newTaskModal.priorityInput.push(1);
                ColorStars(star);
            } else if (star.classList[0] === "two"){
                newTaskModal.priorityInput.pop();
                newTaskModal.priorityInput.push(2);
                ColorStars(star);
            } else if (star.classList[0] === "three"){
                newTaskModal.priorityInput.pop();
                newTaskModal.priorityInput.push(3);
                ColorStars(star);
            }            
        console.log(newTaskModal.priorityInput);
        return newTaskModal.priorityInput        
        })        
    })
    const ColorStars = function(star){
        const star1 = document.querySelector(".one");
        const star2 = document.querySelector(".two");
        const star3 = document.querySelector(".three");
        if (star.classList[0] === "one") {
            star1.classList.remove("fi-rr-star");
            star1.classList.add("fi-sr-star");
            star2.classList.remove("fi-sr-star");
            star2.classList.add("fi-rr-star");
            star3.classList.remove("fi-sr-star");
            star3.classList.add("fi-rr-star");
        } else if(star.classList[0] === "two"){
            star1.classList.remove("fi-rr-star");
            star1.classList.add("fi-sr-star");
            star2.classList.remove("fi-rr-star");
            star2.classList.add("fi-sr-star");
            star3.classList.remove("fi-sr-star");
            star3.classList.add("fi-rr-star");
        }else if(star.classList[0] === "three"){
            star1.classList.remove("fi-rr-star");
            star1.classList.add("fi-sr-star");
            star2.classList.remove("fi-rr-star");
            star2.classList.add("fi-sr-star");
            star3.classList.remove("fi-rr-star");
            star3.classList.add("fi-sr-star");
        }
    }
},
addNotes: () => {
    const notesBtn = document.querySelector(".notes-btn");
    const newNotesModal = function () {
        let modal = document.querySelector(".modal");
        let template = document.getElementById("notes-modal-template");
        let div = template.content.cloneNode(true);
        modal.append(div);
        closeCancelBtn();
        newTaskModal.addNotesBtn();
    }
    notesBtn.addEventListener("click", newNotesModal);
    
},
addNotesBtn: () => {
    
    const addNotesBtn = document.querySelector(".add-notes-btn")
    const fn = function () {
        let notesText = document.getElementById("notes").value;

        newTaskModal.notesInput.push(notesText);
        console.log(newTaskModal.notesInput[0]);
        let notesModal = document.querySelector(".notes-modal");
        notesModal.classList.add("inactive");
    }
    addNotesBtn.addEventListener("click", fn)
}
,
addSubtask: () => {
    const subtaskBtn = document.querySelector(".subtask-btn");
    const newSubtaskModal = function () {
        let modal = document.querySelector(".modal");
        let template = document.getElementById("subtask-modal-template");
        let div = template.content.cloneNode(true);
        modal.append(div);
        closeCancelBtn();
        newTaskModal.addNewSubtask();
        }
    subtaskBtn.addEventListener("click", newSubtaskModal);   
},
// Adding subtask modal
addNewSubtask: () => {
    let addNewDiv = document.querySelector(".add-new");
    const newAddSTModal = function() {
        let modal = document.querySelector(".modal");
        let template = document.getElementById("addnew-subtask-template");
        let div = template.content.cloneNode(true);
        modal.append(div);
        makeInputPretty();
        closeCancelBtn();
        newTaskModal.addNewSubtaskInput();
        let subtaskModal = document.querySelector(".subtask-body");
        subtaskModal.style.display = "none";
    }
    addNewDiv.addEventListener("click", newAddSTModal);
},
// Add subtask's subtask modal for input
addNewSubtaskInput: () => {
    let submitBtn = document.querySelector(".submit-subtask-btn");
    submitBtn.addEventListener("click", newTaskModal.addS);
},
addS: ev =>{
    ev.preventDefault();
    ev.stopPropagation();
    let taskName;
    let taskDesc;
    let inputs = document.querySelectorAll(".input-field");
    inputs.forEach(input => {
        if (input.id === "subtask-name-input"){
            taskName = input.value;
        } else if (input.id === "subtask-desc-input"){
            if (input.value === "") {
                taskDesc = "Empty"}
            else {
                taskDesc = input.value;
            }
        } 
    })
    closeFn();
    renderAddedItemsOnSubtask(taskName, taskDesc);
    let subtaskModal = document.querySelector(".subtask-body");
    subtaskModal.style.display = "block";
    let obj = {taskName, taskDesc}
    newTaskModal.subtaskInput.push(obj)
    
}

}

