import { addTask } from "./nav.js"
import { starsArr } from "./input.js";
import { makeInputPretty } from "./input.js";


let c = makeInputPretty;
console.log(c)

addTask();

let a = starsArr();


const mainContent = document.querySelector(".main-content");
const modal = document.querySelector(".modal");