class Shapes {
    constructor(name){
        let _name = name;

        this.getName = () =>{
            return _name
        }
    }
}

class Rectangle extends Shapes {
    constructor(name, side1, side2) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }

    get getArea() {
        return this.side1 * this.side2;
    }

    get isSquared() {
        let isShapeSquared = false
        if (this.side1 === this.side2) {
            return isShapeSquared = true;
        }
        return isShapeSquared;
    }
}

let me = new Shapes("Rectangle")
let rectangle = new Rectangle("Rectangle", 5, 4)
console.log(rectangle.getArea)
console.log(rectangle.isSquared)
console.log(rectangle.getName())
console.log(rectangle.side1)
console.log(rectangle.side2)
