const description={
    require:true,
    alias:'d',
    desc:'Description of todo list'
}
const id={
    alias:'i',
    require:true  
}
const completed={
    alias:'c',
    default:true
}
const argv = require('yargs')
            .command('create','create a tarea',{id,description})
            .command('update','update a tarea',{id,completed})
            .command('delete','delete a tarea',{id})
            .help()
            .argv

module.exports ={
    argv
}