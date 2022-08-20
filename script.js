const addTodo = document.querySelector(".add");
const todos = document.querySelector(".todos");


// template for todo
const template = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-solid fa-trash"></i>
    </li>
`;
todos.innerHTML += html;
};



addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addTodo.add.value.trim();
  template(todo);
    addTodo.reset();
});


