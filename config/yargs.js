const argv = require('yargs')
            .command('create','create a tarea',{
                description:{
                    require:true,
                    alias:'d',
                    desc:'Description of todo list'
                }
            })
            .command('update','update a tarea',{
                    description:{
                        require:true,
                        alias:'d',
                        desc:'Description of todo list'
                    },
                completado:{
                    alias:'c',
                    default:true
                }
            })
            .help()
            .argv

module.exports ={
    argv
}