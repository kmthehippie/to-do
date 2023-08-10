import { makeInputPretty, closeCancelBtn, catAdd } from "./general.js";
import { inputTaskModal } from "./input_task.js";
import { outputTask } from "./output_task.js"

export const categories = {
    currentCat : [],
    render: () => {
        let modal = document.querySelector(".modal");
        let template = document.getElementById("project-modal-template");
        let div = template.content.cloneNode(true);
        let taskModal = document.querySelector(".task-modal");
        taskModal.classList.add("inactive");
        div.querySelector(".new-project").addEventListener("click", categories.newCatAdded)
        modal.appendChild(div)
        makeInputPretty();
        closeCancelBtn();
        // add items to select
    },
    newCatAdded: () => {
        let taskModal = document.querySelector(".task-modal");
        taskModal.classList.remove("inactive");
        let input = document.getElementById("project-name").value;
        catAdd(input)
        let projectModal = document.querySelector(".project-modal");
        projectModal.classList.add("inactive")
        inputTaskModal.category = input
    },
    oldCatAdded: ()=>{
        if (outputTask.existingCategories.length < 1){
            return
        }else if (outputTask.existingCategories.length >= 1){
        outputTask.existingCategories.forEach( cat => {
            if (cat === "default") {}
            else if (cat !== "default"){
                catAdd(cat)
            }
        })
    }
}}