let prompt = require(`prompt-sync`)();
let log = console.log;

class TrainglePattern{
    diamondPattern(number){
        for (let i = 0; i < number; i++) {
            for (let j = i; j < number; j++) {
                process.stdout.write("  ")        
            }
            for (let j = 0; j <= i; j++) {
                process.stdout.write("* ")        
            }
            for (let j = 0; j < i; j++) {
                process.stdout.write("* ")        
            }
            log()
        }
        for (let i = 1; i < number; i++) {            
            for (let j = 0; j <= i; j++) {
                process.stdout.write("  ")        
            }
            for (let j = i; j < number; j++) {
                process.stdout.write("* ")        
            }
            for (let j = i+1; j < number; j++) {
                process.stdout.write("* ")        
            }
            log()
        }
    }
}

let tp = new TrainglePattern();
let number = parseInt(prompt("Enter length of triangle: "))
tp.diamondPattern(number);