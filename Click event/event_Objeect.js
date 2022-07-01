// event object

const firstButton = document.querySelector("#one")
// firstButton.addEventListener("click", function(){
//     console.log(this)
// })

// firstButton.addEventListener("click", function(event){
//     console.log(event)
// })


// firstButton.addEventListener("click", function(abc){
//     console.log(abc)
// })

// function hello(a){
//     console.log(a)
// }

// hello({key:"value1", key2:"value2"})


const allButtons = document.querySelectorAll(".my-buttons button")
// for(let button of allButtons){
//     button.addEventListener("click", (e)=>{
//         console.log(e.currentTarget)
//     })
// }

for(let button of allButtons){
    button.addEventListener("click", function(e){
        console.log(e.currentTarget)
        console.log(this.textContent)
    })
}