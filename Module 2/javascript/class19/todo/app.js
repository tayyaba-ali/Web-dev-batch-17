let addTask = document.getElementById("addTask");
let task = document.getElementById("task");
let list = document.getElementById("list");

addTask.addEventListener("click", () => {
  if (addTask.innerHTML == "Add Task") {
    console.log(task);

    list.innerHTML += `<div class="main"><li>${task.value}</li> <div> <button onclick="edit(this)">Edit</button> <button  onclick="removeTodo(this)">Delete</button></div> </div>`;
    task.value = " ";
  } else {
    console.log("else chlrha ha");

    let updatedTodo = task.value; //naya todo
    console.log(updatedTodo);

    let element = document.querySelector(".main").firstElementChild; //porana li element ka element
    console.log(element);

    let previousTask = element; // content
    console.log(previousTask);

    console.log(previousTask);
    console.log(updatedTodo);

    previousTask.innerHTML = updatedTodo;
    addTask.innerText = "Add Task";
    task.value = " ";

    // userTodo.innerText = updatedTodo;
  }
});

function edit(element) {
  console.log("chlra ha");

  let userTodo = element.parentNode.parentNode.firstChild;

  task.value = userTodo.innerText;

  console.log(element.parentNode.parentNode.firstChild.innerText);

  addTask.innerHTML = "Save";
}

function removeTodo(event) {
  event.parentNode.parentNode.innerHTML = " "
}
