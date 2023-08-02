import { newTaskModal } from "./modalInput.js";

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
//THIS WAS USELESS AFTER I REALIZE I AM NOT SUPPOSE TO DO THIS. I JUST NEED A - SIGN.
// TOGGLE TICK BOX AND ADD LINETHROUGH. AFTER ADDED. DONE
//ITEM WILL BE DELETED ONCE PAGE REFRESH. NOT CHANGE ON SHOW.
export const toggleCheckBox = () => {
    let stFirstLine = document.querySelector(".st-first-line");
    const toggleTick = function() {
        // Adding check and strikethrough on subtask. listen for click.
        let squareChecked = document.querySelector(".square-checked");
        let div = document.createElement("div");
        div.classList = "st";
        if (squareChecked.innerHTML === "") {
            console.log("empty");
            console.log(squareChecked);
            squareChecked.innerHTML = "<i class='fi fi-br-check'></i>"
            stFirstLine.appendChild(div);
        } else if(squareChecked.innerHTML !== ""){
            let st = document.querySelector(".st")
            console.log("not empty");
            console.log(squareChecked);
            squareChecked.innerHTML = ""
            stFirstLine.removeChild(st)
        }}
    stFirstLine.addEventListener("click", toggleTick);
}

export const removeSubtask = function(){
    let minus = document.querySelectorAll(".minus-remove-st");
    const subtaskGen = document.querySelector(".subtask-generated");
    // const delDiv = function(event){
    //     console.log(event);
    //     // if (currentDiv === selectedDiv){
    //     //     then do the removal
    //     // }
    //     let a = event.srcElement.closest(".subtask-subtask-card")
    //     let stGen = document.querySelector(".subtask-generated");
    //     // let div = btn.closest(".subtask-subtask-card");
    //     console.log(a);
    //     console.log(newTaskModal.subtaskInput);
        
    //     console.log(index);
    //     // 
    //     // console.log(newTaskModal.subtaskInput);
    //     // subtaskGen.removeChild(a);
    //     // newTaskModal.subtaskInput
    // }
  
// THIS IS NOT WORKING MAN... I THINK WE NEED TO SPLIT OUT THE ENTIRE PART FOR SUBTASK TO ANOTHER MODULE ALTOGETHER. ITS TOO MESSY AS IT IS RIGHT NOW. I CANT FIND ANYTHING. I CANT SUB OR PUB ANYTHING. MY - LOOPS MULTIPLE TIMES CAUSING MY FUNCTION TO FAIL.
    minus.forEach(btn=>{
        btn.addEventListener("click", function(e){
            let stGen = document.querySelector(".subtask-generated");
            let div = btn.closest(".subtask-subtask-card");
            let index = Array.prototype.indexOf.call(stGen.children, div);
            console.log(index);
            
            let arr = newTaskModal.subtaskInput;
            console.log(arr);
            let before = arr.slice(0, index);
            let after = arr.slice(index+1, arr.length);
            console.log(before, after);
            let newArr = before.concat(after);
            console.log(newArr);

            newTaskModal.subtaskInput = newArr;
            stGen.removeChild(div);

            console.log(newTaskModal.subtaskInput);
        })
    })

}