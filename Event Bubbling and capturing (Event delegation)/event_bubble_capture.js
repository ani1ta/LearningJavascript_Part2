// event Bubbling / event propogation
// event capturing

// event Bubbling

console.log("Hello world")

const grandParent = document.querySelector(".grandparent")
const Parent = document.querySelector(".Parent")
const Child = document.querySelector(".child")
const body = document.body


Child.addEventListener("click", ()=>{
    console.log("Capture!! child")
}, true)

Parent.addEventListener("click", ()=>{
    console.log("Capture!! Parent")
}, true)

grandParent.addEventListener("click", ()=>{
    console.log("Capture!! grandParent")
}, true)

body.addEventListener("click", ()=>{
    console.log("Capture!! body")
}, true)


// bubble

grandParent.addEventListener("click", ()=>{
    console.log("Bubble!! grandParent")
})

Parent.addEventListener("click", ()=>{
    console.log("Bubble!! parent")
})


Child.addEventListener("click", ()=>{
    console.log("Bubble!! child")
})


body.addEventListener("click", ()=>{
    console.log("Bubble!! body")
})