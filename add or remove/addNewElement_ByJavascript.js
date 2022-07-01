// add new Html element by javascript

const newTodolist = document.querySelector(".todo-list")
console.log(newTodolist.innerHTML)


// 1st way
newTodolist.innerHTML = newTodolist.innerHTML + "<li> Todo 2 </li>"
console.log(newTodolist.innerHTML)

// 2nd way

newTodolist.innerHTML += "<li> new list </li>"
console.log(newTodolist.innerHTML)