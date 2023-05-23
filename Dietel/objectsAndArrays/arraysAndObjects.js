let countElement = (phrase) =>{
    let frequency = {};
    for (const letter of phrase) {
        // if (letter == ' ') {
        //     continue;
        // }
        if (letter in frequency) {
            frequency[letter] += 1;
        }
        else{
            frequency[letter] = 1;
        }
    }
    console.log(frequency.I)
    return frequency;
}
let phrase = "I am who I am"
console.log(countElement(phrase));