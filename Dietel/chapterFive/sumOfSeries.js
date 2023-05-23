
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
    process.stdout.write(`${i.toString().padStart(3)} ${sum.toString().padStart(7)}\n`)
}