const fs = require('fs')

let todoList=[]

const createTodo = ()=>{

    let data = JSON.stringify(todoList)

    fs.writeFile('todo-list/todo-list.json' , data , err => {
        if(err) throw new Error ('todo not save',err)
        console.log(`todo "${todoList[0].description}" save`)
    })
}

const create = description =>{
    let todo = {
        description,
        completed:false
    }
    todoList.push(todo)
    createTodo()
    return todo
}

module.exports = {
    create
}