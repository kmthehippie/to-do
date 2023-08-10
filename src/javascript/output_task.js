import { taskStorage } from "./storage_tasks.js";
import { removeDup, taskRender, sorting, sortProject, sortDate} from "./general.js"

export const outputTask = {
    existingTask: [],
    tempExistingTask: [],
    existingCategories: [],
    render: () => {
        let template = document.getElementById("nd-task-template");
        let templateDone = document.getElementById("done-task-template");
        if(taskStorage.storage === null){outputTask.existingTask = []}
        else if (taskStorage.storage !== null) {outputTask.existingTask = taskStorage.storage};
        outputTask.existingTask = sorting(outputTask.existingTask)
        removeDup(outputTask.existingCategories);
        let allDiv = document.querySelector(".all-page");
        let projectDiv = document.querySelector(".project-page")
        let todayDiv = document.querySelector(".today-page")

        let allNav = document.querySelector(".all");
        allNav.addEventListener("click", ()=>{
            outputTask.tempExistingTask = outputTask.existingTask
            outputTask.tempExistingTask = sorting(outputTask.existingTask);
            projectDiv.classList.add("inactive")
            todayDiv.classList.add("inactive")

            if(allDiv.childNodes.length === 0){
                allDiv.classList.remove("inactive")
                let t = outputTask.existingTask;
                if (t !== null){
                t.forEach(task => {
                    outputTask.existingCategories.push(task.taskCategory);
                    outputTask.existingCategories = removeDup(outputTask.tempExistingTask)
                    if (task.taskDone === false) {
                        let div = template.content.cloneNode(true);
                        taskRender(div, task);
                        allDiv.appendChild(div)
                    } 
                    else if (task.taskDone === true) {
                        let div = templateDone.content.cloneNode(true);
                        taskRender(div, task)
                        allDiv.appendChild(div)
                    }
                })}
            }else {
                allDiv.classList.remove("inactive")
            }
        })
        let todayNav = document.querySelector(".today");
        todayNav.addEventListener("click", ()=>{
            outputTask.tempExistingTask = outputTask.existingTask;
            outputTask.tempExistingTask = sortDate(outputTask.existingTask);
            projectDiv.classList.add("inactive")
            allDiv.classList.add("inactive")
            todayDiv.classList.remove("inactive")
            if (todayDiv.childNodes.length === 0){
                let t = outputTask.tempExistingTask;
                if (t !== null){
                t.forEach(task => {
                    if (task.taskDone === false) {
                        let div = template.content.cloneNode(true);
                        taskRender(div, task);
                        todayDiv.appendChild(div)
                    } 
                })}
            } 
            
        })
        let projectNav = document.querySelector(".projects");
        projectNav.addEventListener("click", ()=>{
            outputTask.tempExistingTask = outputTask.existingTask;
            outputTask.tempExistingTask = sortProject(outputTask.tempExistingTask);
            allDiv.classList.add("inactive")
            todayDiv.classList.add("inactive")
       
            if (projectDiv.childNodes.length === 0){
                projectDiv.classList.remove("inactive")
                let t = outputTask.tempExistingTask;
                if (t !== null){
                t.forEach(task => {
                    if(task.taskDone === false){
                    outputTask.existingCategories.push(task.taskCategory);
                    console.log(task.taskCategory);
                    console.log(removeDup(outputTask.existingCategories));
                    outputTask.existingCategories = removeDup(outputTask.existingCategories)
                    console.log(outputTask.existingCategories);
                    }
                })}
                outputTask.existingCategories.forEach(cat => {
                    const ptt = document.getElementById("project-task-template");
                    let pDiv = ptt.content.cloneNode(true);
                    const projectPg = document.querySelector(".project-page");
                    let proDiv = pDiv.querySelector(".project-div-ptt")
                    let proName = document.createElement("h3");
                    proName.setAttribute("id", "project-name-ptt");
                    proName.textContent = cat;
                    proDiv.appendChild(proName)
                    projectPg.appendChild(pDiv);
                    t.forEach(task => {
                        if(task.taskCategory === cat && task.taskDone === false) {
                            let div = template.content.cloneNode(true);
                            taskRender(div, task);
                            proDiv.appendChild(div)
                        } 
                    })
                })
                
            } else {
                projectDiv.classList.remove("inactive")
            }
        })

        let t = outputTask.existingTask;
        if (t !== null){
        t.forEach(task => {
            outputTask.existingCategories.push(task.taskCategory);
            outputTask.existingCategories = removeDup(outputTask.existingCategories)
            if (task.taskDone === false) {
                let div = template.content.cloneNode(true);
                taskRender(div, task);
                allDiv.appendChild(div)
            } 
            else if (task.taskDone === true) {
                let div = templateDone.content.cloneNode(true);
                taskRender(div, task)
                allDiv.appendChild(div)
            }
        })}


    },
    priorityChanged: (e) => {
        let priority = e.target.closest(".priority");
        let parent = e.target.closest(".stars")
        if(priority.classList[1] === "one"){
            parent.children[0].innerHTML = "<i class='fi fi-sr-star'></i>"
            parent.children[1].innerHTML = "<i class='fi fi-rr-star'></i>"
            parent.children[2].innerHTML = "<i class='fi fi-rr-star'></i>"
        } else if(priority.classList[1] === "two"){
            parent.children[0].innerHTML = "<i class='fi fi-sr-star'></i>"
            parent.children[1].innerHTML = "<i class='fi fi-sr-star'></i>"
            parent.children[2].innerHTML = "<i class='fi fi-rr-star'></i>"
        } else if(priority.classList[1] === "three"){
            parent.children[0].innerHTML = "<i class='fi fi-sr-star'></i>"
            parent.children[1].innerHTML = "<i class='fi fi-sr-star'></i>"
            parent.children[2].innerHTML = "<i class='fi fi-sr-star'></i>"
        }
    },
    subtaskChanged: (e) => {
        let parent = e.target.closest(".subtask-lineone");
        let st = parent.querySelector(".st");
        let check = parent.querySelector(".square-checked");
        if (st.classList[1] === "inactive") {
            st.classList.remove("inactive")
            check.classList.remove("inactive")
        }else if (st.classList[1] !== "inactive") {
            st.classList.add("inactive")
            check.classList.add("inactive")
        }
    },
    taskChanged: (e) => {
        if (e.target.classList[0] === "fi")
        {return}
        else {
            let parent = e.target.closest(".main-task");
            let st = parent.querySelector(".st");
            let check = parent.querySelector(".square-checked");
            if (st.classList[1] === "inactive") {
                st.classList.remove("inactive")
                check.classList.remove("inactive")
            }else if (st.classList[1] !== "inactive") {
                st.classList.add("inactive")
                check.classList.add("inactive")
            }
        }
    }
}