const {argv} = require('./config/yargs')
const {create,getList,updating,deleteTo} = require('./todo/todo')

const comand = argv._[0]

const description = argv.description
const id = argv.id
const state = argv.completed

switch(comand){
    case 'create':
        create(description,id)
        break;
    case 'update':
        updating(id,state)
        console.log(state)
        break;
    case 'list':
      getList()
       break;
    case 'delete':
        deleteTo(id)
        break;
    default:
        console.log(`the comand ${comand} not recognized`)
}