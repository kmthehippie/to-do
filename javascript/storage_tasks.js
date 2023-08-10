import { inputTaskModal } from "./input_task.js"
import { outputTask } from "./output_task.js";

export const taskStorage = {
    storage: [],
    storageAdded: () => {
        if (taskStorage.storage === null){ 
            taskStorage.storage = [];
            console.log(inputTaskModal.finalInputObj);
            taskStorage.storage.push(inputTaskModal.finalInputObj);
            console.log(taskStorage.storage);
            localStorage.setItem("tasks", JSON.stringify(taskStorage.storage));
            // location.reload();
        } else if(taskStorage.storage !== null){
            taskStorage.storage.push(inputTaskModal.finalInputObj);
            console.log(taskStorage.storage);
            localStorage.setItem("tasks", JSON.stringify(taskStorage.storage));
        }
    },
    fromOpStorageAdded: () => {
        localStorage.clear();
        taskStorage.storage = [];
        taskStorage.storage.push(outputTask.existingTask);
        console.log(taskStorage.storage);
        localStorage.setItem("tasks", JSON.stringify(taskStorage.storage[0]));
        console.log(taskStorage.storage);
        location.reload();
    },
    storageRetrieved: () => {
        if (taskStorage.storage === null){
            taskStorage.storage = [];
        } else if (taskStorage.storage !== null){
            let a = JSON.parse(localStorage.getItem("tasks"));
            taskStorage.storage = a;
        }
        outputTask.render();
    }
}