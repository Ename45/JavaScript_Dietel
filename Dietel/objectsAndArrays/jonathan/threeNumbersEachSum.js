let log = console.log;

function sumThreeElementsEach(numbers) {    
    let dummyNumber;
    let realNumber = "";
    let sum = 0;
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
        count++;

        if (count == 3) {
        realNumber += sum;
        count = 0;
        sum = 0;
        }
    }
    realNumber+= sum;

    while (!(realNumber.length < 4)) {
        dummyNumber = "";
        count = 0;
        sum = 0;

        for (let i = 0; i < realNumber.length; i++) {
            sum += parseInt(realNumber[i]);
            count++;

            if (count == 3) {
                dummyNumber += sum;
                count = 0;
                sum = 0;
            }
        }
            dummyNumber += sum;
            realNumber = dummyNumber;
    }
    return dummyNumber;
}

let numbers = "11111222223";
log(sumThreeElementsEach(numbers));

// function sumThreeElementsEach(numbers) {
//   let realNumber;

//   while (!(numbers.length < 4)) {
//     realNumber = "";
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += parseInt(numbers[i]);
//       count++;

//       if (count === 3) {
//         realNumber += sum;
//         count = 0;
//         sum = 0;
//       }
//     }
//     realNumber += sum;
//     numbers = realNumber;
//   }

//   return realNumber;
// }
