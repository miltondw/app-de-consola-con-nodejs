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

const create =( description,id) =>{
    cargarTodo()
    let todo = {
        description,
        completed:false,
        id
    }
    todoList.push(todo)
    createTodo()
    return todo
}

const getList = ()=>{
    cargarTodo()
    let list = todoList
    for(let todo of list){
        console.log(`====Todo-list-${todo.id}====`.green.black)
        console.log(`${todo.description}`.blue.black)
        todo.completed ? console.log(`State:${todo.completed}`.blue.black) : console.log(`State:${todo.completed}`.red.black) 
    }
}

const updating = (id,completed=true)=>{
    cargarTodo()
    let  i = id-1
    if(i>=0){
        todoList[i].completed=completed
        createTodo()
        return console.log('state update')
    }else{
        return console.log('no updeting')
    }
}

const deleteTo = id =>{
    cargarTodo()
    let  p = id-1
    if(p>=0){
       let newLit= todoList.filter(todo =>{
           return todo.id !== id
       })
       console.log(newLit)
       if(newLit.length === todoList.length){
           return console.log('no delete todo')
       }else{
        todoList=newLit
        createTodo()
        return console.log('todo delete')
       }
    }else{
        return console.log('no delete todo')
    }
}

module.exports = {
    create,
    getList,
    updating,
    deleteTo
}