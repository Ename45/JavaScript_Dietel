let sum = 0;

for (let i = 0; i < 30; i++) {
    if (i%3 == 0) {
        process.stdout.write(`${i + " "}`);
        sum+= i;
    }
}

console.log("\n"+sum);