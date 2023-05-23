let prompt = require(`prompt-sync`)();
let log = console.log;


    let denominator = 1;
    let sum = 0;
    let number = 4;

    for (let i = 0; i < 200000; i++) {
        if (i%2 == 0) {
            sum+= number/denominator;
            process.stdout.write(`${i.toString().padStart(6)} ${sum.toFixed(5).toString().padStart(20)}\n`);
        }
        else {
            sum-= number/denominator;
            process.stdout.write(`${i} ${sum.toFixed(5).toString().padStart(20)}\n`);
        }
        denominator+=2;
    }