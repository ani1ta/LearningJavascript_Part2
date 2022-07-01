// closures 

function printFullname(firstName, lastName){
    function printName(){
        console.log(firstName, lastName)
    }

    return printName
}

const ans = printFullname("Annie", "Mishra")
ans()

