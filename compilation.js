// compilation of javascript

console.log(this)
console.log(window)
console.log(firstName)
var firstName= "Anita"  //undefined
// const firstName= "Anita"--->> Uncaught ReferenceError: Cannot access 'firstName' before initialization at  
// let firstName = "Anita"--->>   Uncaught ReferenceError: Cannot access 'firstName' before initialization
console.log(firstName)