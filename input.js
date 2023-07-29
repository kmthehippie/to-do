
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



//JS for cancelling and closing pages. Still need to render the template for "Are you sure you want to discard"
export const closeCancelBtn = function(){
    const closeBtns= document.querySelectorAll(".close");
    const cancelBtns = document.querySelectorAll(".cancel");
    closeBtns.forEach(btn =>{
        btn.addEventListener("click", closeFn )
    })
    cancelBtns.forEach(btn => {
        btn.addEventListener("click", closeFn)
    })
}

export const closeFn = function (){
    const modal = document.querySelector(".modal")
    let length = modal.children.length -1;
    let divToRemove = modal.children[length];
    if (length === 0) {
        modal.removeChild(divToRemove);
        modal.classList.add("inactive");
    } else {
        modal.removeChild(divToRemove);
    }    
}

//JS for ADD TASK BUTTON
export const submitAddTaskBtn = function (){
    let addTask = document.querySelector(".submit-task-btn");
    addTask.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
    })
}

//Notes and Subtask Add EL
export const addListener = function(btn, fn){
    btn.addEventListener("click", fn);   
}





export const formInput = {
    Task : function({taskName, taskDesc, taskDueDate, taskPriority, taskCategory, taskNotes, taskSubtask}) {
        this.taskName = taskName,
        this.taskDesc = taskDesc,
        this.taskDueDate = taskDueDate,
        this.taskPriority = taskPriority,
        this.taskCategory = taskCategory,
        this.taskNotes = taskNotes,
        this.taskSubtask = taskSubtask
    },
    tasks: [],
    render: container =>{
        // render tasks

    },
    taskAdded: taskName => {
        // add task to tasks array
    },
    taskDeleted: ev => {
        // when you hear the click, strike the task
        // when page is refreshed, task is removed from list and no longer displays
    }
}



// add el to checkbox -- 
// TOGGLE TICK BOX AND ADD LINETHROUGH. AFTER ADDED. ITEM WILL BE DELETED ONCE PAGE REFRESH. NOT CHANGE ON SHOW.
export const toggleCheckBox = () => {
    let checkbox = document.querySelector(".checkbox-icon");
    checkbox.addEventListener("click", toggleTick);
    const toggleTick = function() {
        // !!!! STOPPED HERE!!!!!!!/////
        let squareChecked = document.querySelector("square-checked");
        squareChecked.innerHTML = "<i class='fi fi-br-check'></i>";
    }
}
