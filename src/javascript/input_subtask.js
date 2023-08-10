import { makeInputPretty, closeFn, subtaskDescFix,  } from "./general.js";

export const inputSubtaskModal = {
    outputSubtask: [],
    render: () => {
        
        let taskModal = document.querySelector(".task-modal");
        taskModal.classList.add("inactive");
        let modal = document.querySelector(".modal");
        let template = document.getElementById("main-subtask-modal-template");
        let div = template.content.cloneNode(true);
        const specialCloseFn = function (){
            closeFn();
            taskModal.classList.remove("inactive")
        }
        div.querySelector(".add-new-subtask").addEventListener("click", inputSubtaskModal.renderST);
        div.getElementById("subtask-final-added").
        addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            let currentDiv = document.querySelector(".subtask-modal")
            let taskNames = currentDiv.querySelectorAll(".task-name");
            let descNames = currentDiv.querySelectorAll(".desc-name");
            inputSubtaskModal.outputSubtask = []
            for(let i = 0; i < taskNames.length; i++){
                inputSubtaskModal.outputSubtask[i] = {
                    subtaskDone: false,
                    subtaskName: taskNames[i].textContent,
                    subtaskDesc: subtaskDescFix(descNames[i])    
                }
            }

        // NEED TO CHECK WHAT'S WRONG WITH DESCNAMES
            let stmodal = document.querySelector(".subtask-modal");
            stmodal.remove();
            taskModal.classList.remove("inactive")
        })
        div.querySelector(".close").addEventListener("click", specialCloseFn)
        div.querySelector(".cancel").addEventListener("click", specialCloseFn)
        
        modal.appendChild(div)
        makeInputPretty();
    },
    renderST: () => {
        let modal = document.querySelector(".modal");
        let mainST = document.querySelector(".subtask-modal")
        mainST.classList.add("inactive")
        let template = document.getElementById("input-child-subtask-template");
        let div = template.content.cloneNode(true)
        const specialCloseFn = function (){
            closeFn();
            mainST.classList.remove("inactive")
        }
        div.querySelector(".submit-subtask-btn").addEventListener("click", function(e){
            e.preventDefault()
            e.stopPropagation()
            inputSubtaskModal.STadded();
            mainST.classList.remove("inactive")
            let icsm = document.querySelector(".input-child-subtask-modal");
            icsm.remove();
        });
        div.querySelector(".close").addEventListener("click", specialCloseFn);
        div.querySelector(".cancel").addEventListener("click", specialCloseFn);
        modal.appendChild(div);
        makeInputPretty();
    },
    STadded: () => {
        let tn = document.getElementById("subtask-name-input").value;
        let td = document.getElementById("subtask-desc-input").value;
        let subtaskGen = document.querySelector(".subtask-generated");
        let template = document.getElementById("child-subtask-modal-template");
        let div = template.content.cloneNode(true);
        div.querySelector(".remove-child-subtask").addEventListener("click", function(e){
            e.target.closest(".child-subtask-card").remove();
        })
        div.querySelector(".task-name").textContent = tn;
        div.querySelector(".desc-name").textContent = td;
        if (tn === "") {} 
        else {
            subtaskGen.appendChild(div);
        }
    }

}