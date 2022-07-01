// get set attribute

const link = document.querySelector("a")
console.log(link.getAttribute("href"))
console.log(link.getAttribute("href").slice(1))

link.setAttribute("href", "https://google.co.in")
console.log(link)
console.log(link.getAttribute("href"))


const inputElement = document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("type"))
console.log(inputElement.getAttribute("placeholder"))

