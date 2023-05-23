let prompt = require(`prompt-sync`)();
let log = console.log;

class TrainglePattern{
    patternOne(number){
        for (let i = 0; i < number; i++) {
            for (let j = 0; j <= i; j++) {
                process.stdout.write("* ")        
            }
            log()
        }
    }
    patternTwo(number){        
    log()
    log()
        for (let i = 0; i < number; i++) {
            for (let j = i; j < number; j++) {
                process.stdout.write("* ")        
            }
            log()
        }
    }
    patternThree(number){        
        log()
        log()
        for (let i = 0; i < number; i++) {
            for (let space = 0; space <= i; space++) {
                process.stdout.write("  ")        
            }

            for (let j = i; j < number; j++) {
                process.stdout.write("* ")        
            }
            log()
        }
    }
    patternFour(number){        
        log()
        log()
        for (let i = 0; i < number; i++) {
            for (let space = i; space < number; space++) {
                process.stdout.write("  ")        
            }

            for (let j = 0; j <= i; j++) {
                process.stdout.write("* ")        
            }
            log()
        }
    }
}

let tp = new TrainglePattern();
let number = parseInt(prompt("Enter length of triangle: "))
tp.patternOne(number);
tp.patternTwo(number);
tp.patternThree(number);
tp.patternFour(number);