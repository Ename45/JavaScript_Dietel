
function storeDuplicates(numbers){
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!result.includes(numbers[i])){
            result.push(numbers[i]);
        }
    }
    return result;
}

let numbers = [2, 3, 3, 4, 1, 1, 12, 4]
console.log(storeDuplicates(numbers))


// let x = 2;
// let sum = function(a, b){
//     let x = a + b + x;
//     return x;
// }
// console.log(sum(2, 3))

// function average(a, b){
//     function sum(a, b){
//         return a+b;
//     }
//     return sum(a, b)/2
// }

// console.log(average(2, 3))


let sum = a =>{
    return a + 15;
}   