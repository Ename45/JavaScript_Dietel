function Person(name, age) {
    this.name = name;
    this.age = age;
    this.arms = 2;
    this.legs = 2;
}

function Student(name, age, college, matricNumber) {
    Person.call(this, name, age);
    this.college = college;
    this.matricNumber = matricNumber;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sense = 1
Person.prototype.brain = 1

let student1 = new Student("Inem", 32, "COSJ", "15JS00228");
// console.log(student1.arms);
console.log(student1.sense);
console.log(student1.brain);
