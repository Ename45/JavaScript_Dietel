let prompt = require(`prompt-sync`)();
let log = console.log

let name = "You are so fried today and Malik what have you done that you are requesting for brain break";
let nameSplit = name.split(' ')

let newName = []
newName.push(nameSplit.slice(0, 8))
newName.push(nameSplit.slice(12, 18))
newName.push(nameSplit.slice(7, 12))

let finalName = `${newName.toString()}`
log(finalName.split(',').join(' '))



