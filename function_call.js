// function call

function fun(){
    let counter = 0
    return function(){
        if(counter<1){
            console.log("First time call")
            counter++
        }
        else{
            console.log("called second time")
        }
    }
    
}
 
const ans = fun()
ans()
ans()
ans()
ans()

