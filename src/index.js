import { navAddTask } from "./javascript/general.js";
import { taskStorage } from "./javascript/storage_tasks.js";
import './styles.css';

document.addEventListener('DOMContentLoaded', ()=>{
    taskStorage.storageRetrieved();
    navAddTask()
})