// event delegation

const Grandparent = document.querySelector(".grandparent")
const Parent = document.querySelector(".Parent")
const child = document.querySelector(".child")

Grandparent.addEventListener("click", (e)=>{
    console.log(e)
    console.log(e.target)
    console.log(e.textContent.target)
})