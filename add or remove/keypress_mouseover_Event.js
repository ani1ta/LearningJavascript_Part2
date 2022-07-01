// keypress event
// mouseover event



// keypress

const body = document.body

body.addEventListener("keypress", (e)=>{
    console.log(e.key)
})


// mouseover

const buttonHeading = document.querySelector(".btn-headline")

buttonHeading.addEventListener("mouseover", ()=>{
    console.log("MouseOver event occured!!")
})



buttonHeading.addEventListener("mouseover", ()=>{
    console.log("MouseLeave event occured!!")
})