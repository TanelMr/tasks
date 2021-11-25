const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const tasksList = document.querySelector(".collection");
const DelTasksBtn = document.querySelector("#deleteAllTasks");

tasksList.addEventListener("click", deleteTask);
form.addEventListener("submit", addTask);
DelTasksBtn.addEventListener("click", deleteAllTasks);




// function for deleting single tasks
function deleteTask(event){
    if(event.target.textContent == "X"){
        //ask for confirmation
        if (confirm("Do you want to delete this task?")) {
            event.target.parentElement.remove();
        }
    }
}

// function for deleting all tasks
function deleteAllTasks(){
        //ask for confirmation
        if (confirm("Do you want to delete all tasks?")) {
       //slower version -- tasksList.innerHTML = "";
            while(tasksList.firstChild){
                tasksList.removeChild(tasksList.firstChild);
            }
        }

}


function addTask (event) {
    //input value
    const task = taskInput.value;
    // create <li> element
    const li = document.createElement("li");
    // define <li> CSS class
    li.classname = "collection-item";
    // create text value for <li>
    const tekst = document.createTextNode(task);
    console.log(tekst)
    // add text value to <li>
    li.appendChild(tekst);
    //create link element
    const link = document.createElement("a");
    //add href
    link.setAttribute("href", "#");
    // add CSS to link
    link.className = "secondary-content";
    // add "X" text to link
    link.appendChild(document.createTextNode("X"));
    // add link to <li>
    li.appendChild(link);
    // find <ul> DOM component
    const ul = document.querySelector(".collection");
    // add <li> to <ul>
    ul.appendChild(li);
    //save task function
    addTaskToLocalStorage(task);
    // clear input
    taskInput.value = "";
    //preventdefault
    event.preventDefault()
}

function addTaskToLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
