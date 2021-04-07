const argv = require('yargs')
            .command('create','create a tarea',{
                description:{
                    require:true,
                    alias:'d',
                    desc:'Description of todo list'
                },
                id:{
                 alias:'i',
                 require:true, 
                }
            })
            .command('update','update a tarea',{
                    id:{
                        alias:'i',
                        require:true  
                    },
                    completed:{
                        alias:'c',
                        default:true
                    }
            })
            .command('delete','delete a tarea',{
                id:{
                    alias:'i',
                    require:true  
                }
        })
            .help()
            .argv

module.exports ={
    argv
}