// insertAdjacentHTML
// beforeend --> like append
// afterbegin --> like prepend
// beforeend --> likr before
// afterend -->> like after

const Todo = document.querySelector(".todo-list")
// Todo.insertAdjacentHTML("beforeend", "<li> Teach student </li>")
// Todo.insertAdjacentHTML("afterbegin", "<li> Teach student </li>")
// Todo.insertAdjacentHTML("beforebegin", "<li> Teach student </li>")
Todo.insertAdjacentHTML("afterend", "<li> Teach student </li>")