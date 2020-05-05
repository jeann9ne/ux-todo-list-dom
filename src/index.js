
let todos = [
    {
      completed: true,
      description: "Take Jim to the hair salon",
    },
    {
      completed: true,
      description: "Drop off wedding invitation at mailbox",
    },
    {
      completed: false,
      description: "Pick up the cake",
    },
    {
      completed: false,
      description: "Call the caterers",
    },
  ];
  
  function addToDo() {
    let val = document.getElementById("todo-input").value;
    let newObj = {completed:false, description: val};
    todo = todos.unshift(newObj);
  
    renderTodoApp();
  }
  
  function renderTodoApp() {
    let items = "";
    let app = document.querySelector("#app");
    todos.forEach(function (todo) {
      items += `<li class="items"><input class="check" ${
        todo.completed ? "checked='checked'" : ""
      } type="checkbox">${todo.description}</li>`;
    });
  
    app.innerHTML = `<h1> Todo List </h2>
      <ul class="list" id="items>${items}</ul>`;
  }
  
  renderTodoApp();