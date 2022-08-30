const newTodo = document.querySelector(".newTodo");
const todos = document.querySelector(".todos");

const search = document.querySelector('.searchBar')

// generate template

const Generatetemplate = (todo) => {
  const html = `<div class="todo">
  <span>${todo}</span>
  <i class="fa-solid fa-trash delete"></i>
</div>`;

  todos.innerHTML += html;
};
// add todo

newTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = newTodo.addTodo.value.trim();
  if (todo.length) {
    Generatetemplate(todo);
    newTodo.reset();
  }
});

//delete todo

todos.addEventListener('click' , e =>{
    if(e.target.classList.contains('delete')){
        console.log(e.target.parentElement)
       e.target.parentElement.remove();
    }
})

//search todo
search.addEventListener('keyup' , (e)=>{
  const todoElememts = document.querySelectorAll('.todo');
  e.preventDefault();
   let searchValue = search.searchTodo.value.toLowerCase();
   todoElememts.forEach( (todoElement)  => {
      if (!todoElement.textContent.toLowerCase().includes(searchValue)){
        todoElement.classList.add('hide')
      }else{
        todoElement.classList.remove('hide')
      }
  })
})


