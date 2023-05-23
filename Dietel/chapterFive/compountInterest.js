let principal = 1000;
let annualInterestRate = 0.05;
let numberOfYears = 10;
let endOfYearAmount = 0;
let count = 2;

while (annualInterestRate < 0.11) {
    for (let year = 1; year <= numberOfYears; year++) {
        endOfYearAmount = principal * Math.pow(1 + annualInterestRate, year);
        process.stdout.write(`${year.toString().padStart(2)} ${endOfYearAmount.toFixed(2).toString().padStart(7)}\n`);

        if (year == 10) {
            
        }
    }
    
    if (year == 10) {
        annualInterestRate = annualInterestRate+0.01;
        year = 1;
    }
}




