let largesetNumber = Number.MIN_SAFE_INTEGER;
let secondLargesetNumber = Number.MIN_SAFE_INTEGER;

function secondLargesetNumbers(numbers){
    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largesetNumber) {
        secondLargesetNumber = largesetNumber;
        largesetNumber = numbers[i];
    }
    if (numbers[i] < largesetNumber && numbers[i] > secondLargesetNumber) {
        secondLargesetNumber = numbers[i];
    }
}
    return secondLargesetNumber;
}

let numbers = [2, 3, 6, -4, 9, 9, 8]
console.log(secondLargesetNumbers(numbers))



