// getElementByClassName tag using for define class
// querySelectorAll

const allClass = document.getElementsByClassName("item1")
console.log(allClass)
console.log(allClass[0])
console.log(allClass[1])
console.log(allClass[2])
// console.log(allClass[3]) --->> undefined beacuse there are only 3 classes availables
console.log(typeof allClass)
console.log(Array.isArray(allClass))


const allClass1 = document.querySelectorAll(".item1")
console.log(allClass1)
console.log(allClass1[0])
console.log(allClass1[1])
console.log(allClass1[2])