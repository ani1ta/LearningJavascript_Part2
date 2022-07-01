// project based on event delegation

// const todoForm = document.querySelector(".form-todo")
// const todoInput = document.querySelector(".form-todo input[type='text']")
// const newToDoList = document.querySelector(".todo-list")


// todoForm.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     const TextTodo = todoInput.value
//     const newLi = document.createElement("li")
//     const newInnerHTML = `
//     <span class="text">${TextTodo}</span>
//     <div class="todo-Buttons">
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//     </div>`

//     newLi.innerHTML = newInnerHTML
//     newToDoList.append(newLi)
//     todoInput.value = " "
// })

// newToDoList.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("remove")){
//         const newLiTarget = e.target.parentNode.parentNode
//         newLiTarget.remove()
//     }

//     if(e.target.classList.contains("done")){
//         const liSpan = e.target.parentNode.previousElementSibling
//         liSpan.style.textDecoration = "line-through"
//     }
// })




const todoForm = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const todoTextInput  = todoInput.value
    const newLi = document.createElement("li")
    const newLiInnerHtml = `
    <span class="text">${todoTextInput}</span>
    <div class="todo-Buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`

    newLi.innerHTML= newLiInnerHtml
    todoList.append(newLi)
    todoInput.value = " "
})

todoList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("remove")){
        const newLiTaregt = e.target.parentNode.parentNode
        newLiTaregt.remove()
    }

    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling
        liSpan.style.textDecoration = "line-through"
    }
})