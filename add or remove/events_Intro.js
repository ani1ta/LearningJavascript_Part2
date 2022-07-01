// intro to the events



// click event
// 3 ways to add the event


// 1. we directly use this from HTML but this is not a right way

// 2. way

// const btn = document.querySelector(".btn-headline")
// console.dir(btn)
// btn.onclick = function(){
//     console.log("Clicked Me!!")
// }


// 3. way --> addEventListner

const btn = document.querySelector(".btn-headline")


// normal function


// function clickMe(){
//     console.log("Clicked Me!!")

// }

// btn.addEventListener("click", clickMe)


// function Expression

// btn.addEventListener("click", function(){
//     console.log("Clicked!!")
// })


// arrow function

btn.addEventListener("click", ()=>{
    console.log("Clicked!!")
})

