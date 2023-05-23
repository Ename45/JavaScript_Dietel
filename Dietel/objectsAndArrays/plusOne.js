let prompt = require(`prompt-sync`)();
let log = console.log;


function addOne(array){
let numberToString = ""
let sum = 1
let newNumber = []

    for (let number of array) {        
        numberToString+=number;
        log(numberToString)   
    }

    sum = parseInt(numberToString) + sum;

    let sumToString = `${sum}`;

    for (let letter of sumToString) {
        newNumber.push(parseInt(letter));
    }2
    
    return newNumber;
}


let array = [4,2,1];
log(addOne(array))