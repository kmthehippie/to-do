import { removeSubtask } from "./input.js";

// export const tasks = {
//     list: [],
//     render: container =>{
//         let template = document.getElementById("taskTemplate");
//         let div = template.content.cloneNode(true);
//         container.appendChild(div);
//         let checked = document.querySelector(".square-checked");
//         let square = document.querySelector(".square");
//         square.addEventListener("click", tasks.taskCompleted)
//     },
//     taskCompleted: ev => {
//         console.log(ev);
//     }
// }

export const renderAddedItemsOnSubtask = (taskName, taskDesc) => {
    let div = document.querySelector(".subtask-generated");
    let template = document.getElementById("subtask-subtask-template");
    let newDiv = template.content.cloneNode(true);
    div.appendChild(newDiv);
   
    const renderText = function(taskName, taskDesc) {
        let tndiv = document.querySelectorAll(".task-name");
        tndiv.forEach(tn => {
            if (tn.textContent === "") tn.textContent = taskName;
        })
        let tddiv = document.querySelectorAll(".desc-name");
        tddiv.forEach(td => {
            if (td.textContent === "") td.textContent = taskDesc;
        })
    }
    renderText(taskName, taskDesc);
    removeSubtask();

    
}