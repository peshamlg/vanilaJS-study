const TODOS_KEY = "todos";
let toDos = [];

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadToDos() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;

  const span = document.createElement("span");
  span.innerText = newToDoObj.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();

  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
loadToDos();
