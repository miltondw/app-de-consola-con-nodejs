const fs = require('fs')
require('colors')

let todoList=[]

const createTodo = ()=>{

    let data = JSON.stringify(todoList)

    fs.writeFile('todo-list/todo-list.json' , data , err => {
        if(err) throw new Error ('todo not save',err)
        console.log(`todo save`)
    })
}

const cargarTodo = ()=>{
    try{
        todoList = require('../todo-list/todo-list.json')
    }catch (err){
        todoList=[]
    }
}

const create = description =>{
    cargarTodo()
    let todo = {
        description,
        completed:false
    }
    todoList.push(todo)
    createTodo()
    return todo
}

const getList = ()=>{
    cargarTodo()
    let list = todoList
    for(let todo of list){
        console.log(`====Todo-list====`.green.black)
        console.log(`${todo.description}`.red.black)
        console.log("======Estate=====".green.black)
        console.log(`${todo.completed}`.red.black)
    }
}

module.exports = {
    create,
    getList
}