import { makeInputPretty, starsArr, closeCancelBtn, fixCatText } from "./general.js";
import { inputNotesModal } from "./input_notes.js";
import { inputSubtaskModal } from "./input_subtask.js";
import { categories } from "./project.js";
import { taskStorage } from "./storage_tasks.js";



export const inputTaskModal = {
    finalInputObj: {},
    subtaskInput: [],
    notesInput: [],
    priority: [0],
    category: [],
    render: () => {
        let modal = document.querySelector(".modal");
        let template = document.getElementById("newtask-modal-template");
        let div = template.content.cloneNode(true);
        // remove inactive + add div to modal
        modal.classList.remove("inactive");
        div.querySelector(".add-task-btn").addEventListener("click", inputTaskModal.taskAdded);
        div.querySelector(".addnotes-btn").addEventListener("click", inputNotesModal.render);    
        div.querySelector(".addsubtask-btn").addEventListener("click", inputSubtaskModal.render);
        div.getElementById("project-select").addEventListener("change", function() {
            if(this.value === "new"){
                categories.render();
            } else {
                inputTaskModal.category = fixCatText(this.value)
            }
            // console.log(inputTaskModal.category);
        });
        modal.appendChild(div);
        categories.oldCatAdded();
        starsArr(inputTaskModal.priority);
        makeInputPretty();
        closeCancelBtn();
    },
    taskAdded: ev => {
        ev.preventDefault();
        ev.stopPropagation();
        // get all the data
        let taskName = "";
        let taskDesc = "";
        let taskDueDate = "";
        let taskCategory = "";
        console.log(inputTaskModal.category);
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
        //put data in object and push it to storage
        inputTaskModal.finalInputObj = {
            taskName : taskName, 
            taskDesc : taskDesc, 
            taskDueDate : taskDueDate, 
            taskPriority : inputTaskModal.priority[0],
            taskCategory : inputTaskModal.category,
            taskNotes : inputNotesModal.outputNotes,
            taskSubtasks : inputSubtaskModal.outputSubtask,
            taskDone : false 
        }
        taskStorage.storageAdded();
        //here remove the entire div from modal.
        let modal = document.querySelector(".modal");
        let taskModal = document.querySelector(".task-modal");
        modal.removeChild(taskModal)
        modal.classList.add("inactive")
        location.reload();
    },
    
}