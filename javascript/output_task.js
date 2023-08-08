import { taskStorage } from "./storage_tasks.js";
import { renderPriority, makeDatePretty, removeDup, taskRender, sorting, sortProject, sortDate} from "./general.js"

export const outputTask = {
    existingTask: [],
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
            outputTask.existingTask = sorting(outputTask.existingTask);
            projectDiv.classList.add("inactive")
            todayDiv.classList.add("inactive")

            if(allDiv.childNodes.length === 0){
                allDiv.classList.remove("inactive")
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
            }else {
                allDiv.classList.remove("inactive")
            }
        })
        let todayNav = document.querySelector(".today");
        todayNav.addEventListener("click", ()=>{
            outputTask.existingTask = sortDate(outputTask.existingTask);
            projectDiv.classList.add("inactive")
            allDiv.classList.add("inactive")

            if (todayDiv.childNodes.length === 0){
                todayDiv.classList.remove("inactive")
                let t = outputTask.existingTask;
                if (t !== null){
                t.forEach(task => {
                    outputTask.existingCategories.push(task.taskCategory);
                    outputTask.existingCategories = removeDup(outputTask.existingCategories)
                    if (task.taskDone === false) {
                        let div = template.content.cloneNode(true);
                        taskRender(div, task);
    
                        todayDiv.appendChild(div)
                    } 
                    else if (task.taskDone === true) {
                        let div = templateDone.content.cloneNode(true);
                        taskRender(div, task)
                        todayDiv.appendChild(div)
                    }
                })}
            } else {
                todayDiv.classList.remove("inactive")
            }
            
            
        })
        let projectNav = document.querySelector(".projects");
        projectNav.addEventListener("click", ()=>{
            outputTask.existingTask = sortProject(outputTask.existingTask);
            allDiv.classList.add("inactive")
            todayDiv.classList.add("inactive")

            if (projectDiv.childNodes.length === 0){
                projectDiv.classList.remove("inactive")
                let t = outputTask.existingTask;
                if (t !== null){
                t.forEach(task => {
                    outputTask.existingCategories.push(task.taskCategory);
                    outputTask.existingCategories = removeDup(outputTask.existingCategories)
                    if (task.taskDone === false) {
                        let div = template.content.cloneNode(true);
                        taskRender(div, task);
                        
                        projectDiv.appendChild(div)
                    } 
                    else if (task.taskDone === true) {
                        let div = templateDone.content.cloneNode(true);
                        taskRender(div, task)
                        
                        projectDiv.appendChild(div)
                    }
                })}
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
        console.log(st);
        if (st.classList[1] === "inactive") {
            st.classList.remove("inactive")
            check.classList.remove("inactive")
        }else if (st.classList[1] !== "inactive") {
            st.classList.add("inactive")
            check.classList.add("inactive")
        }
        console.log(e.target);
    },
    taskChanged: (e) => {
        let parent = e.target.closest(".main-task");
        let st = parent.querySelector(".st");
        let check = parent.querySelector(".square-checked");
        console.log(st);
        if (st.classList[1] === "inactive") {
            st.classList.remove("inactive")
            check.classList.remove("inactive")
        }else if (st.classList[1] !== "inactive") {
            st.classList.add("inactive")
            check.classList.add("inactive")
        }
        console.log(e.target);
    }
}