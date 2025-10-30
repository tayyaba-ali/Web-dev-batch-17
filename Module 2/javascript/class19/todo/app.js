let addTask = document.getElementById("addTask");
let task = document.getElementById("task");
let list = document.getElementById("list");

addTask.addEventListener("click", () => {
  console.log(task);

  list.innerHTML += `<div class="main"><li>${task.value}</li> <div> <button onclick="edit(this)">Edit</button> <button>Delete</button></div> </div>`;
  task.value = " ";
});

function edit(element) {
  element.addEventListener("click", () => {
    task.value = element.parentNode.parentNode.firstChild.innerText
  });
}
