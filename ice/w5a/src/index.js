import Task from "./components/Task/index.js"
let element;
let input;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick)
    
}
<<<<<<< HEAD
    
=======

>>>>>>> f5bd81462727dd54f2ab2a0e49a690edec7ebe49
function onClick() {
    console.log("clicked!");
    var newTask = new Task({content:input.value,done:false});
    element.appendChild(newTask.render());
<<<<<<< HEAD
  }
=======
}
>>>>>>> f5bd81462727dd54f2ab2a0e49a690edec7ebe49

window.addEventListener("DOMContentLoaded", runOnLoad);