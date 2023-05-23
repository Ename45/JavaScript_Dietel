let prompt = require(`prompt-sync`)();
let log = console.log

let word = "supercalifragelisticsexpilalidouious";
let reverse
for (let i = 0; i < word.length; i++) {
    reverse = word.split(word.charAt(i)).reverse().join(' ');
}


log(reverse)

let name = "You are so fried today and Malik what have you done that you are requesting for brain break";
na