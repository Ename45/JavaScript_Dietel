// const prompt = require('prompt-sync')();
let log = console.log;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function twoLargestNumber(){
    let counter = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    while (counter < 10) {
        let number = randomInt(1, 10);
        process.stdout.write(`${number} ${" "}`);
        
        if(number > maxNumber){
            maxNumber = number;
        }  
        if(number < minNumber) {
            minNumber = number;
        } 
        
        counter++;
    }
    sum = maxNumber + minNumber;
    
    return `\nThe sum of the max number ${maxNumber} and the min number ${minNumber} = ${sum}`
}

log(twoLargestNumber());