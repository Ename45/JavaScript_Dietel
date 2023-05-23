let log = console.log;

function index (base){
    return (number)=> number * base;
}

// holding base
let baseTwo = index(2);
// let baseThree = index(3);

log(typeof baseTwo(2))
log(typeof baseTwo)
// number
// log(baseTwo(3))
// log(baseTwo(4))