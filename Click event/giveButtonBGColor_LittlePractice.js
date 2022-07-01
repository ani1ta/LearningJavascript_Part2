// Give Button Background Color

const allButtons = document.querySelectorAll(".my-buttons button")
allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.target)
        e.target.style.backgroundColor = "green"
        e.target.style.color = "red"
    })
})