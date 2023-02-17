const todos = document.querySelector(".todos");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");

function generateTemplate(todo) {
  if (!todo.length) {
    return;
  }
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  todos.innerHTML += html;
}
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = addForm.add.value.trim();
  generateTemplate(newTodo);
  addForm.reset();
});

todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (search) => {
  Array.from(todos.children)
    .filter((item) => !item.textContent.toLowerCase().includes(search))
    .forEach((item) => item.classList.add("filtered"));

  Array.from(todos.children)
    .filter((item) => item.textContent.toLowerCase().includes(search))
    .forEach((item) => item.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  filterTodos(search.value.trim().toLowerCase());
});
