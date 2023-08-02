import { inputTaskModal } from "./input_task.js";

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

// Stars Function
export const starsArr = (prio) => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) =>{
        star.addEventListener("click", ()=>{
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
}

// Add function for add new task on Navigation
export const navAddTask = function() {
    const nav = document.querySelector(".nav-add-task")
    nav.addEventListener("click", inputTaskModal.render)
}