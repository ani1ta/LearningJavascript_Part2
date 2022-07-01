// multiple buttons in events

const allButtons = document.querySelectorAll(".my-buttons")
console.log(allButtons)

// const firstbutton = document.querySelector("#one")
// firstbutton.addEventListener("click", function(){
//     console.log("clicked Button 1")
// })


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this)
//     })
// }

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent)
//     })
// }


// arrow function -->> give undefined because can't give object

// for(let button of allButtons){
//     button.addEventListener("click", ()=>{
//         console.log(this.textContent)
//     })
// }


// simple for loop

// for(let i=0; i<allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this)
//     })
// }


allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this)
    })
})