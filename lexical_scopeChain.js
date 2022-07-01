// lexical and scope chain

const lastname = "Mishra"

function myFun(){
    const firstName = "Anita"
    console.log(firstName)
    console.log(lastname)
}

myFun()



// second example

const lname = "Singh"

const myFunc = function(){
    const fname = "Annie"
    const myFun2 = function(){
        console.log(fname)
        console.log(lname)
    }

    myFun2()
}

myFunc()