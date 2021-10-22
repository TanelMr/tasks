const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
form.addEventListener("submit", addTask)
const tasksList = document.querySelector(".collection")
tasksList.addEventListener("click", deleteTask)


// funktsioon ühe task'i kustutamiseks  --- ei tööta veel :/
function deleteTask(event){
    if(e.target.textContent == "X"){
        if (confirm("Do you want to delete this task?")) {
            e.target.parentElement.remove();
        }
    }
    //kus täpselt click toimus
    console.log(e.target.textContent)
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
    // clear input
    taskInput.value = "";

    event.preventDefault();
}