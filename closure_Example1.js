// example 1 of closure

function hello(argu){
    const var1 = "VarA"
    const var2 = "VarB"
    return function(){
        console.log(var1, var2, argu)
    }
}

const ans = hello("x")
ans()