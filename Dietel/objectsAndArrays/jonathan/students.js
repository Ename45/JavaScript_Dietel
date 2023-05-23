class Student {
  constructor(matricNumber, college) {
    // let _matric = matricNumber;
    this.college = college;

    this.setMatricNumber = (matricNumber) => {
    this.matric = matricNumber;
    };
    this.getMatricNumber = () => {
    return this.matric;
    };
  }

    set setMatricNumber(matricNumber) {
        _matric = matricNumber
    }

    get getMatricNumber() {
        return _matric;
    }

    set setCollege(collegeName) {
        this.college = "CEDS";
    }

    get getCollege() {
        return this.college;
    }

    static sayCollege() {
        return `Student with matric number - ${_matric} is in this ${this.college}`;
    }
}


class Native extends Student{
    constructor(matricNumber, college, cohort ){
        super(matricNumber, college)
        this.cohort = cohort
    }
}

let inem = new Student("15/sms/2014", "SMS")
console.log(inem.getMatricNumber)
console.log(Student.sayCollege())
// inem.setMatricNumber("14/sms/2014");
// console.log(inem.getMatricNumber());


let userDetails = {username: "Inem", password: "batteries123"};
let stringified = JSON.stringify(userDetails);
console.log(typeof stringified)
console.log(JSON.parse(stringified))
