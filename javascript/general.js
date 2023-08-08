import { inputTaskModal } from "./input_task.js";
import { outputTask } from "./output_task.js";
import { taskStorage } from "./storage_tasks.js";

// JS to make the input pretty
export const makeInputPretty = function() {
    const inputs = document.querySelectorAll(".input-field");
    inputs.forEach(inp =>{
        inp.addEventListener("focus", ()=>{
            inp.classList.add("active")
        })
        inp.addEventListener("blur", ()=>{
            if (inp.value != "") return;
            inp.classList.remove("active")
        })
    })
}

// Stars Function For taskModal
export const starsArr = (prio) => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) =>{
        star.addEventListener("click", ()=>{
            console.log(star);
            if (star.classList[0] === "one") {
                prio.pop();
                prio.push(1);
                ColorStars(star);
            } else if (star.classList[0] === "two"){
                prio.pop();
                prio.push(2);
                ColorStars(star);
            } else if (star.classList[0] === "three"){
                prio.pop();
                prio.push(3);
                ColorStars(star);
            }            
        return prio      
        })        
    })
    const ColorStars = function(star){
        let taskModal = document.querySelector(".task-modal")
        const star1 = taskModal.querySelector(".one");
        const star2 = taskModal.querySelector(".two");
        const star3 = taskModal.querySelector(".three");
        if (star.classList[0] === "one") {
            console.log(star1, star2, star3);
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
}



// Add function for add new task on Navigation
export const navAddTask = function() {
    const nav = document.querySelector(".nav-add-task")
    nav.addEventListener("click", inputTaskModal.render)
}

// Add function to close current modal
export const closeCancelBtn = function() {
    const close = document.querySelectorAll(".close");
    const cancel = document.querySelectorAll(".cancel");
    close.forEach(btn => {
        btn.addEventListener("click", closeFn)
    })
    cancel.forEach(btn => {
        btn.addEventListener("click", closeFn)
    })
}

//Escape key to close current modal
export const escapeKey = function(){
    document.addEventListener("keydown", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const modal = document.querySelector(".modal");
        let length = modal.children.length - 1;
        let divToRemove = modal.children[length];

    })
}

//Function for closing modal
export const closeFn = function () {
    const modal = document.querySelector(".modal");
    let length = modal.children.length - 1;
    let divToRemove = modal.children[length];
    if(length === 0) {
        modal.removeChild(divToRemove);
        modal.classList.add("inactive");
    }else{
        modal.removeChild(divToRemove);
    }
}

//Check and render taskpriority
export const renderPriority = function(a, div){
    if(a === 0){
    div.innerHTML = "<div class='priority one'><i class='fi fi-rr-star'></i> </div><div class='priority two'><i class='fi fi-rr-star'></i> </div><div class='priority three'><i class='fi fi-rr-star'></i> </div>"
    } else if(a === 1) {
    div.innerHTML = "<div class='priority one'><i class='fi fi-sr-star'></i> </div><div class='priority two'><i class='fi fi-rr-star'></i> </div><div class='priority three'><i class='fi fi-rr-star'></i> </div> "
    } else if (a === 2) {
    div.innerHTML = "<div class='priority one'><i class='fi fi-sr-star'></i> </div><div class='priority two'><i class='fi fi-sr-star'></i> </div><div class='priority three'><i class='fi fi-rr-star'></i> </div> "
    }else if (a === 3) {
    div.innerHTML = "<div class='priority three'><i class='fi fi-sr-star'></i> </div><div class='priority two'><i class='fi fi-sr-star'></i> </div><div class='priority three'><i class='fi fi-sr-star'></i> </div> "
    }
}



//Making Dates show only date without time
export const makeDatePretty = function(x) {
    let newDate = new Date(x).toDateString();
    if (newDate === "Invalid Date"){return}
    else {
        return newDate
    }
}

// subtaskdescription => if === undefined then assign ""
export const subtaskDescFix = function(subtaskDesc){
    if (subtaskDesc === undefined) {
        return undefined
    } else if (subtaskDesc !== undefined){
        return subtaskDesc.textContent
    }
}

//remove duplicates

export const removeDup = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

//main task render

export const taskRender = function(div, task) {
    div.querySelector(".main-task").addEventListener("click", function(e){
        console.log(e.target);
        if (task.taskDone === true){ task.taskDone = false}
        else if (task.taskDone === false){ task.taskDone = true}
        outputTask.taskChanged(e)
        console.log(task.taskDone);
        taskStorage.fromOpStorageAdded();
        location.reload()
    })
    
    div.querySelector(".category-name").textContent = task.taskCategory;
    //render taskName and taskDesc
    div.querySelector(".task-name").textContent = task.taskName;
    div.querySelector(".main-task-desc").textContent = task.taskDesc;
    //Render Stars
    let starDiv = div.querySelector(".stars");
    renderPriority(task.taskPriority, starDiv);
    //Here need to add functionality to the priority so that can change the existing priority.
    div.querySelectorAll(".priority").forEach(star => {
        star.addEventListener("click", function(e) {
            if (star.classList[1] === "one"){
                task.taskPriority = 1
            } else if (star.classList[1] === "two") {
                task.taskPriority = 2
            } else if (star.classList[1] === "three") {
                task.taskPriority = 3
            }
            outputTask.priorityChanged(e)
            taskStorage.fromOpStorageAdded();
            closeFn();
        })
    })

    //Render taskDueDate
    div.querySelector(".main-task-duedate").textContent = makeDatePretty(task.taskDueDate)


    let taskCard = div.querySelector(".task-card");

    if (taskCard === null){
        taskCard = div.querySelector(".done-task-card")
    }
   

    //Render notes
    if(task.taskNotes !== ""){
        let notesTemplate = document.getElementById("notes-template");
        let notesDiv = notesTemplate.content.cloneNode(true)
        notesDiv.querySelector("a").addEventListener("click", (e)=>{
            e.preventDefault();
            let notesModalTemplate = document.getElementById("notes-template-modal");
            let modal = document.querySelector(".modal");
            modal.classList.remove("inactive");
            let notesModalDiv = notesModalTemplate.content.cloneNode(true);
            let ncmText = notesModalDiv.querySelector(".ncm-text");
            let textArea = document.createElement("textarea");
            ncmText.appendChild(textArea)
            textArea.setAttribute("cols", "50")
            textArea.setAttribute("rows", "6")
            textArea.value = task.taskNotes;
            
            let updateBtn = notesModalDiv.querySelector(".update-notes");
            updateBtn.addEventListener("click", ()=>{
                task.taskNotes = textArea.value
                taskStorage.fromOpStorageAdded();
                modal.classList.add("inactive");
                notesModalDiv.classList.add("inactive")
            })
            
            notesModalDiv.querySelector(".close").addEventListener("click", closeFn)
            notesModalDiv.querySelector(".cancel").addEventListener("click", closeFn)

            
            modal.appendChild(notesModalDiv);

        })
        taskCard.appendChild(notesDiv);


    }

    //Render subtask
    let st = task.taskSubtasks
    if(st !== []){
        st.forEach(s =>{
            let subtaskTemplate = document.getElementById("subtask-template");
            let subtaskDiv = subtaskTemplate.content.cloneNode(true);
            subtaskDiv.querySelector(".subtask-name").textContent = s.subtaskName;
            subtaskDiv.querySelector(".subtask-desc").textContent = s.subtaskDesc;
            if(s.subtaskDone === true) {
                subtaskDiv.querySelector(".st").classList.remove("inactive")
                subtaskDiv.querySelector(".square-checked").classList.remove("inactive")
            }                       
            subtaskDiv.querySelector(".subtask-lineone").addEventListener("click", function(e){
                if (s.subtaskDone === true){ s.subtaskDone = false}
                else if (s.subtaskDone === false){ s.subtaskDone = true}
                console.log(s.subtaskDone);
                outputTask.subtaskChanged(e);
                taskStorage.fromOpStorageAdded();
            });
            taskCard.appendChild(subtaskDiv);
        })
    }
}


//Adding Categories to the task modal
export const catAdd = function(item) {
    let value = item.toLowerCase().split(" ").join("-");
    let newOption = document.createElement("option");
    let optionText = document.createTextNode(item);

    newOption.appendChild(optionText)
    newOption.setAttribute("value", value)            
    newOption.setAttribute("selected", "selected")
    let select = document.querySelector("select");
    let addBtn = document.getElementById("addnew-project")
    select.insertBefore(newOption, addBtn)
}



//organize by sort DONE OR NOT DONE function
export const sorting = function(array){
    let sorted = [];
    let arrDone = [];
    let arrNDone = [];
    array.forEach(item =>{
        if(item.taskDone === true){
            arrDone.push(item)
        }else 
        if(item.taskDone === false){
            arrNDone.push(item)
        }
    })
    sorted.push(...arrNDone);
    sorted.push(...arrDone);
    return sorted
}

//organize by project name function
export const sortProject = function (array){
    let sorted = [];
    let arrDone = [];
    array.forEach(item=>{
        if (item.taskDone === false ){
            arrDone.push(item)
        }
    })
    
    sorted = arrDone.sort(compareName)
    return sorted;
}

//change to normal text
export const fixCatText = function(text){
    let newText;
    
    newText = text
    .split("-")
    .map (word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    
    return newText
}

//organize by date
export const sortDate = function (array) {
    let sorted = [];
    let arrDone = [];
    array.forEach(item => {
        if (item.taskDone === false){
            arrDone.push(item)
        }
    })
    sorted = arrDone.sort(compareDate)
    return sorted;
}

//function to compare category name
function compareName(a,b) {
    const cat1 = a.taskCategory.toUpperCase()
    const cat2 = b.taskCategory.toUpperCase()

    let comparison = 0;
    if (cat1>cat2){
        comparison = 1
    } else if (cat1<cat2){
        comparison = -1
    }
    return comparison

}

function compareDate(a,b) {
    const cat1 = a.taskDueDate
    const cat2 = b.taskDueDate

    let comparison = 0;
    if (cat1>cat2){
        comparison = 1
    } else if (cat1<cat2){
        comparison = -1
    }
    return comparison

}