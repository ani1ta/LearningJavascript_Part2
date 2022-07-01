// array like object --->. indexing, length property
// getElementByTagName we use
// simple for loop
// for of loop
// we can't use foreach in this

// HTML collection

// const navItems  = document.getElementsByTagName("a")
// console.log(navItems)


// simple for loop

// for(let i=0; i<navItems.length; i++){
//     console.log(navItems[i])
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"
// }

// for f loop

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"
// }


//  we use forEach but if we convert thi in array

// let navItems  = document.getElementsByTagName("a")
// console.log(navItems)

// navItems = Array.from(navItems)
// console.log(Array.isArray(navItems))
// navItems.forEach(navItem =>{
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"
// })



// NodeList

const navItems2 = document.querySelectorAll("a")
console.log(navItems2)

for(let i=0; i<navItems2.length; i++){
    console.log(navItems2[i])
    const navItem1 = navItems2[i]
    navItem1.style.backgroundColor = "#fff"
    navItem1.style.fontWeight = "bold"
    navItem1.style.color = "green"
}


// for of loop 

// for(let navItem1 of navItems2){
//     navItem1.style.backgroundColor = "#fff"
//     navItem1.style.color = "green"
//     navItem1.style.fontWeight = "bold"
// }


// forEach 

// let navItems2 = document.querySelectorAll("a")
// console.log(navItems2)

// navItems2 = Array.from(navItems2)
// console.log(Array.isArray(navItems2))
// navItems2.forEach(navItem1 =>{
//     navItem1.style.backgroundColor = "#fff"
//     navItem1.style.color = "green"
//     navItem1.style.fontWeight = "bold"
// })