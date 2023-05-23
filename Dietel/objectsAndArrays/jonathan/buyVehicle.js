// function buyVehicle(year){
//     console.log(`This vehicle of year ${year} has ${this.wheels} wheels`)
// }

// let vehicle = {wheels:4, buyVehicle};
// let vehicle2 = {wheels:5, buyVehicle};

// // console.log(vehicle.buyVehicle(2020));
// // console.log(vehicle2.buyVehicle(2015));

// // buyVehicle.call(vehicle2, "intended")
// console.log(Object.getPrototypeOf({ wheels: 4, buyVehicle }));
// console.log("toString" in vehicle);
// console.log(vehicle.__proto__);
// console.log(Object.prototype);

let vehicle = {
    wheels: 4,
};

let car = {
    seat: 5,
    __proto__ : vehicle,
    // __proto__ : {
    //     model: 2019,
    //     color: "blue"
    // }
    wheels: 6
};

// console.log(vehicle.__proto__ == Object.getPrototypeOf(vehicle))
console.log(car, car.__proto__)
console.log(car.wheels)
// console.log(car.wheels)