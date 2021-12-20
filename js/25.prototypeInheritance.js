console.log("Prototypr inheritance");

const proto = {
    slogan: function(){
        return `We are the best`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}
// console.log(proto);


//  This creates a yash object
const yash = Object.create(proto);
yash.name = "yashwardhan";
yash.role = "Engineer";
// console.log(yash);
yash.changeName('brock');
// console.log(yash);


// This also creates a yash object (old syntax)
 const yash2 = Object.create(proto, {
     name: {value: "yashwardhan" , writable: true},
     role: {value: "Engineer"},
 }) 
//  console.log(yash);
 yash.changeName('brock');
// console.log(yash);


// EMPLOYEE CONSTRUCTOR

function employee(getName,getSalary,getExperience){
    this.name = getName;
    this.salary = getSalary;
    this.experience = getExperience;
}

employee.prototype.slogan = function(){
    return `We are the best. Regards,${this.name}`;
} 

let charles = new employee('Charles',500,3);
console.log(charles);

// Now we'll see inheritance in prototypes

// We'll create a programmer constructor , which is a employee too.

function programmer(getName,getSalary,getExperience,getLanguage){
    employee.call(this,getName,getSalary,getExperience);
    this.laguage = getLanguage;
}


// Inherit the prototype
programmer.prototype = Object.create(employee.prototype);

// Manually setting constructor
programmer.prototype.constructor = programmer;

let zuck = new programmer("zuku",100,5,"Js");
console.log(zuck);

