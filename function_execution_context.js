// function execution context

let foo = "foo"
console.log(foo)

function myString(firstName, lastName){
    let var1 = "this is a fun"
    console.log(var1)
    let fullname = firstName + " " + lastName

    return fullname
}

const ans = myString("anita", "Mishra")
console.log(ans)
