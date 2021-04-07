const {argv} = require('./config/yargs')
const {create,getList} = require('./todo/todo')

const comand = argv._[0]

const description = argv.description

switch(comand){
    case 'create':
        create(description)
        break;
    case 'update':
        console.log('updeting')
        break;
    case 'list':
      getList()
       break;
    default:
        console.log(`the comand ${comand} not recognized`)
}