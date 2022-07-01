//  staticList -->>  NodeList  we use querySelector for static list

// liveList -->> HTML Collection we use getElementBySomething fo live List


//  staticList-->> NodeList

// const listItems = document.querySelectorAll(".todo-list li")
// const sixli = document.createElement("li")
// sixli.textContent = "item 6"
// const ul = document.querySelector(".todo-list")
// ul.append(sixli)
// console.log(listItems)


// LiveList -->>HTMLCollection

const ul = document.querySelector(".todo-list")
const ListItems = ul.getElementsByTagName("li")
const sixli = document.createElement("li")
sixli.textContent = "item6"

ul.append(sixli)
console.log(ListItems)