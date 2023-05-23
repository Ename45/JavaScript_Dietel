let prompt = require(`prompt-sync`)();
let log = console.log;

let counter = 0;
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;

while (counter < 5) {
    let studentName = prompt("Enter your name: ");
    let letterGrades = prompt("Enter your grade: ");

    switch (letterGrades) {
        case "A":
            gradeA++;
            break;
    
        case "B":
            gradeB++;
            break;
    
        case "C":
            gradeC++;
            break;
    
        case "D":
            gradeD++;
            break;
    
        default:
            break;
    }
    counter++;
}

log("A: " + gradeA);
log("B: " + gradeB);
log("C: " + gradeC);
log("D: " + gradeD);

