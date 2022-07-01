// Random Background color

const HeadButton = document.querySelector("button")
console.log(HeadButton)

const body = document.body
console.log(body)

const currentColor = document.querySelector(".current-color")
console.log(currentColor)

function generateRandomColor(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor
}

HeadButton.addEventListener("click", ()=>{
    const randomColor = generateRandomColor()
    body.style.backgroundColor = randomColor
    currentColor.textContent = randomColor
})