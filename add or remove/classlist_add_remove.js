// classList-->> how many classes used it returns
// using classlist in javascript we addd the class or also remove

const sectionToDo = document.querySelector(".section-todo")
console.log(sectionToDo.classList)

// add the class in javascript
// sectionToDo.classList.add("bg-dark")
// sectionToDo.classList.remove("bg-dark")


const ans = sectionToDo.classList.contains("container")
console.log(ans)

sectionToDo.classList.toggle("bg-dark")
sectionToDo.classList.toggle("bg-dark")

const header = document.querySelector(".header")
console.log(header.classList)

header.classList.toggle("bg-dark")
header.classList.toggle("bg-dark")