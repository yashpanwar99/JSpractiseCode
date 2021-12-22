console.log("We'll learn about ES6 class & inheritance");

// This is a ES6 syntax (latest js syntax) 

class Employee {
    constructor(givenName, givenExperience , givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I an ${this.name} , Hello!!!!!!!!!!!`;
    }

    joiningYear(){
        return 2021-this.experience;
    }  

    // STATIC METHOD
    static add(a,b){
        return a+b;
    }

}
let yash = new Employee("Yash" , 10 , "Senior");
console.log(yash);
console.log(yash.joiningYear());
console.log(Employee.add(2,4)); // WE can call this function without creating a object

// CLASS INHERITANCE

class programmer extends Employee{
    constructor(givenName, givenExperience , givenDivision , language){
         super(givenName, givenExperience , givenDivision);
         this.language = language;
    }
    static multiply(a,b){
        return a*b;
    }
}

let chintu = new programmer('chintu',2,'mid-senior','css');
console.log(chintu);

console.log(programmer.multiply(2,4)); // We can call this method without creating a object














