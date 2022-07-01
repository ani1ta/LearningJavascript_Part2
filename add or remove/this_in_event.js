// this in event 

// normal function -->> in noraml function this ki value button hoga

// arrow function -->> in arrow function this ki value window hoga


const btn = document.querySelector(".btn-headline")


// declaration function

// function clickMe(){
//     console.log("Value of the fun")
//     console.log("This is a function")
//     console.log(this)
// }

// btn.addEventListener("click", clickMe)


// function expression / anonymous function

// btn.addEventListener("click", function(){
//     console.log("Value of the functon")
//     console.log("This is anonymous func")
//     console.log(this)
// })


// arrow function

btn.addEventListener("click", ()=>{
    console.log("Value of the functon")
    console.log("This is anonymous func")
    console.log(this)
})