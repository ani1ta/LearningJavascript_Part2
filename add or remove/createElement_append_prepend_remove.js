// create element using document.createElement

// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "Teach student"
// const newTodo = document.querySelector(".todo-list")

// append

// newTodo.append(newTodoItem) // append piche add karta hai
// newTodo.appendChild(newTodoItem)



// prepend

// newTodo.prepend(newTodoItem)  // prepend aage se add karta hai


// remove
// const Todo = document.querySelector(".todo-list li")
// newTodo.remove()
// console.log(Todo)


// before

const newTodoItem = document.createElement("li")
newTodoItem.textContent = "Teach student"
const newTodo = document.querySelector(".todo-list")
newTodo.before(newTodoItem)  // before li



// after

const newTodoItem1 = document.createElement("li")
newTodoItem1.textContent = "Teach student"
const newTodo1 = document.querySelector(".todo-list")
newTodo1.after(newTodoItem1) // after li


