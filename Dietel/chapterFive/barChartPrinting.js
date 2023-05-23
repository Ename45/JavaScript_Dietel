let prompt = require(`prompt-sync`)();
let log = console.log;

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let numbersList = [];
for (let i = 0; i < 5; i++) {
    let number = randomInt(1, 31);   
    numbersList.push(number);
}
log(numbersList);

for (let i = 0; i < numbersList.length; i++) {
    for (let j = 0; j <= numbersList[i]; j++) {
        process.stdout.write("* ")        
    }    
    log()
}
