const prompt = require('prompt-sync')();
let log = console.log;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function twoLargestNumber(){
    let counter = 0;
    let largestNumber = Number.MIN_SAFE_INTEGER;
    let secondLargestNumber = Number.MIN_SAFE_INTEGER;

    while (counter < 10) {
        let number = getRandomInt(1, 10);
        process.stdout.write(`${number} ${" "}`);
        
        if(number > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = number;
        }
        else if(number > secondLargestNumber){
            secondLargestNumber = number;
        }    
        
        counter++;
    }

    log("\nThe first largest Number is: " + largestNumber);
    log("The second largest Number is: " + secondLargestNumber);
}

log(twoLargestNumber());