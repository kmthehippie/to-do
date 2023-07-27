

export const tasks = {
    list: [],
    render: container =>{
        let template = document.getElementById("taskTemplate");
        let div = template.content.cloneNode(true);
        container.appendChild(div);
        let checked = document.querySelector(".square-checked");
        let square = document.querySelector(".square");
        square.addEventListener("click", tasks.taskCompleted)
    },
    taskCompleted: ev => {
        console.log(ev);
    }
}