// dimensions of elements

const sectionToDo = document.querySelector(".section-todo")
const info = sectionToDo.getBoundingClientRect()
console.log(info)

const info1 = sectionToDo.getBoundingClientRect().height
console.log(info1)

const info2 = sectionToDo.getBoundingClientRect().width
console.log(info2)

const info3 = sectionToDo.getBoundingClientRect().bottom
console.log(info3)


