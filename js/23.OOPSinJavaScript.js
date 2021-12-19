console.log("We'll learn about OOPS");

// Object Literals for creating objects

let car ={
    name : 'Maruti 800',
    topSpeed : 99,
    run : function(){
        console.log('car is running');
    }
}

console.log(car);
console.log(car.topSpeed);
console.log(car.name);

// Creating a Constructor for Car

function GeneralCar(givenName,givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running at ${this.speed}`)
    },
    this.analyze = function(){
        console.log(`This car is ${300-this.speed}/kmph slower then redbull`)
    }
}

car1 = new GeneralCar('Ferrari',250);
car2 = new GeneralCar('Lamborghini' , 260);

console.log(car1.name);
console.log(car2.name);

