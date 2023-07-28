
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

// Priority Input 
export const starsArr = function(){
    const stars = document.querySelectorAll(".star");
    let priorityInput = [0];
    stars.forEach((star) =>{
        star.addEventListener("click", ()=>{
            if (star.classList[0] === "one") {
                priorityInput.pop();
                priorityInput.push(1);
                ColorStars(star);
            } else if (star.classList[0] === "two"){
                priorityInput.pop();
                priorityInput.push(2);
                ColorStars(star);
            } else if (star.classList[0] === "three"){
                priorityInput.pop();
                priorityInput.push(3);
                ColorStars(star);
            }
        console.log(priorityInput);
        return  priorityInput
        })        
    })
}
const ColorStars = function(star){
    const star1 = document.querySelector(".one");
    const star2 = document.querySelector(".two");
    const star3 = document.querySelector(".three");
    if (star.classList[0] === "one") {
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

//Notes and Subtask Add EL
export const addListener = function(btn, fn){
    btn.addEventListener("click", fn);   
}





export const formInput = {
    task: ({taskName, taskDesc, taskDueDate, taskPriority, taskCategory, taskNotes, taskSubtask}) => {
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

