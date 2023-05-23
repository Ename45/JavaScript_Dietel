let prompt = require(`prompt-sync`)();
let log = console.log;

function menstrualCycleCalculator(year, startDate, startMonth, cycle){
    let normalBeginningCycle = 23;
    let normalEndingCycle = 32;

    let myDate;
    let rangeDate;

    if (cycle > normalBeginningCycle && cycle < normalEndingCycle) {
        myDate = new Date(year, (startMonth - 1), (startDate))
        myDate.setDate(myDate.getDate() + parseInt(cycle));        
        
    
        difference = parseInt(normalEndingCycle - cycle);
        rangeDate = new Date(year, (startMonth), (startDate))
        rangeDate.setDate(myDate.getDate() + difference)

        log("you are to see your period between " + myDate + " to " + rangeDate);
    }
    else{
        log("go see a doctor, your cycle is meant to be between '23' and '32' days")
    }    
}


let year = parseInt(prompt("Enter Year: "));
let startDate = parseInt(prompt("Enter start date: "));
let startMonth= prompt("Enter start month: ");
let cycle = parseInt(prompt("How many days is your cycle: "));
menstrualCycleCalculator(year, startDate, startMonth, cycle);