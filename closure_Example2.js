// closure example 2

function myFunction(power){
    return function(number){
        return number**power
    }
}

const squre = myFunction(2)
const ans = squre(3)
console.log(ans)

const cube = myFunction(3)
const ans2 = cube(4)
console.log(ans2)


const myFunction2 = (power)=>(number)=> number**power

const sq = myFunction2(2)
const ans3 = sq(3)
console.log(ans3)

const cube1 = myFunction2(3)
const cubeans = cube1(5)
console.log(cubeans)