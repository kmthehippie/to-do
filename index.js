import { navAddTask } from "./javascript/general.js";
import { taskStorage } from "./javascript/storage_tasks.js";
import { outputTask } from "./javascript/output_task.js";

const mainContent = document.querySelector(".main-content");
const modal = document.querySelector(".modal");


document.addEventListener('DOMContentLoaded', ()=>{
    taskStorage.storageRetrieved();
    navAddTask()
})