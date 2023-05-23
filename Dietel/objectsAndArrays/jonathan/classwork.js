        // CONSTRUCTOR FUNCTIONS

function Person (name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.setAge = (newAge) => {
        console.log(`Age changed from ${this._age} to ${newAge}`);
        this._age = newAge;
    }
}

let sheriff = new Person("Sheriff", 25, "Male");
let joey = new Person("Joey", 99, "Other");

sheriff.setAge(30)
console.log(sheriff.name)

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(sheriff)))