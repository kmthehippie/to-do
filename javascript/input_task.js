import { makeInputPretty, starsArr } from "./general.js";
import { inputNotesModal } from "./input_notes.js";
import { inputSubtaskModal } from "./input_subtask.js";



export const inputTaskModal = {
    finalInputObj: {},
    subtaskInput: [],
    notesInput: [],
    priority: [0],
    render: () => {
        let modal = document.querySelector(".modal");
        let template = document.getElementById("newtask-modal-template");
        let div = template.content.cloneNode(true);
        // remove inactive + add div to modal
        modal.classList.remove("inactive");
        
        div.querySelector(".add-task-btn").addEventListener("click", inputTaskModal.taskAdded);
        div.querySelector(".addnotes-btn").addEventListener("click", inputNotesModal.render);    
        div.querySelector(".addsubtask-btn").addEventListener("click", inputSubtaskModal.render);
        modal.appendChild(div);
        starsArr(inputTaskModal.priority);
        makeInputPretty();
    },
    taskAdded: ev => {
        ev.preventDefault();
        ev.stopPropagation();
        let taskName;
        let taskDesc;
        let taskDueDate;
        let taskCategory;
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
        inputTaskModal.finalInputObj = {
            taskName : taskName, 
            taskDesc : taskDesc, 
            taskDueDate : taskDueDate, 
            taskPriority : inputTaskModal.priority[0],taskCategory : taskCategory, 
            taskNotes : inputNotesModal.outputNotes,
            taskSubtasks : inputSubtaskModal.outputSubtask,
            taskDone : "Not Done" 
        }
        //here remove the entire div from modal.
        console.log(inputTaskModal.finalInputObj);
    },
    
}