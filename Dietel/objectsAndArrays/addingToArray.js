

function information (name, age, grossSalary, taxRate, ...addFruits){
    let person = {
        name: name,
        age: age,
        grossSalary: grossSalary,
        taxRate: taxRate,    
        netIncome: function(){
            return this.grossSalary - (this.grossSalary*this.taxRate)
        },
        fruits: [],
        addFruits: function (addFruits) {
            this.fruits.push(addFruits);        
        }
    }   
    let bio = `My name is ${person.name}. I am ${person.age} years old.\n
    My Enumeration details are:\n
    Gross Salary: ${person.grossSalary}\n
    Tax Rate: ${person.taxRate}\n
    Net Income: ${person.netIncome()}\n
    Favourite fruits: ${person}`        
    return bio; 
}
// function usePerson(person, ...toAdd){
    // function addToFruitsList(...fruitsToAdd){
    //     // for (const fruit of fruitsToAdd) {
            
    //     //     person.addFruits(fruitToAdd)
    //     // }
    //     // person.fruits = "man"
    //  }
    // let bio = `My name is ${person.name}. I am ${person.age} years old.\n
    // My Enumeration details are:\n
    // Gross Salary: ${person.grossSalary}\n
    // Tax Rate: ${person.taxRate}\n
    // Net Income: ${person.netIncome()}\n
    // Favourite fruits: ${person}`;

    // // addToFruitsList(...fruitsToAdd)
    // return bio;

// }

console.log(usePerson(information("Inem", 45, 5000, 0.3)),`orange`, `mango`, `apple`)
// console.log(information("Inem", 45, 5000, 0.3))