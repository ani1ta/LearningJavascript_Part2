// clone nodes--> copy 

const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "Teach Student"
const li2 = li.cloneNode(true)
ul.append(li)
ul.append(li2)