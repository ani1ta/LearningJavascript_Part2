// DOM Traversing Tree
// rootNode
// childNode
// siblings
// parentElement
// children

// const rootNode = document.querySelector("HTML")
// console.log(rootNode.childNodes)


// const rootNode = document.getRootNode()
// const HTMLElementNode = rootNode.childNodes[0]
// console.log(HTMLElementNode.childNodes)

// const rootNode = document.getRootNode()
// const HTMLElementNode = rootNode.childNodes[0]
// const HeadHtml = HTMLElementNode.childNodes[0]
// const TextHTML = HTMLElementNode.childNodes[1]
// const BodyHTML = HTMLElementNode.childNodes[2]
// console.log(HTMLElementNode)

// // siblings element

// // console.log(HeadHtml.nextSibling)
// console.log(HeadHtml.nextSibling.nextElementSibling)
// console.log(HeadHtml.nextSibling.nextSibling)

// // edit

// const h1 = document.querySelector("h1")
// const div  = h1.parentNode
// div.style.backgroundColor = "aliceblue"
// div.style.color = "Red"

// const body = h1.parentNode.parentElement
// body.style.backgroundColor="pink"
// body.style.color = "green"

// const head = document.querySelector("head")
// console.log(head)

// const title = document.querySelector("title")
// console.log(title)
// console.log(title.childNodes)

// const container = document.querySelector(".container")
// console.log(container.childNodes)
// console.log(container.children)   // remove whitesSpace or NS


// const rootNode = document.querySelector("html")
// console.log(rootNode.childNodes)

const rootNode  = document.getRootNode()
console.log(rootNode.childNodes[0])

const HTMLElementNode = rootNode.childNodes[0]
const HeadElement = HTMLElementNode.childNodes[0]
const TextElement = HTMLElementNode.childNodes[1]
const BodyElement = HTMLElementNode.childNodes[2]
console.log(HeadElement)
console.log(HeadElement.nextSibling)
console.log(HeadElement.nextElementSibling)

const h1 = document.querySelector("h1")
const div = h1.parentNode
div.style.backgroundColor = "aliceBlue"
div.style.color = "red"

const body = h1.parentNode.parentElement
body.style.backgroundColor = "pink"
body.style.color = "yellow"

const container = document.querySelector(".container")
console.log(container.childNodes)
console.log(container.children)

const head = document.querySelector("head")
console.log(head)

const title = document.querySelector("title")
console.log(title)
console.log(title.childNodes)