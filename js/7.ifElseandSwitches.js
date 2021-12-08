console.log("We'll learn about ifElse statements & Switches");

/*   '='  is an assignment operator 
     '=='  is a comparison operator
     '=='  only compares the value but '===' compares both type & value    
*/
const age = '19';

if(age == 19){
    console.log("Age is 19");
}else if(age == 65){
    console.log("Age is 65");
}else{
    console.log("Age is not 19");
}

/* It shows 19 even when age is string & in loop a number
because == only compares value not type but === compares both type & value */

/* We use else with multiple is beacuse in case of else if any condition matches the code stops there but if we use only if for multiple conditions then every if will be run irrespective of  wheather any condition match or not */

const vari = 10;
if(typeof vari !== 'undefined'){
    console.log("vari is defined");
}else {
    console.log("vari is not defined");
}


// We can use boolean directly in the loop

const doesDrive = true;

if(doesDrive){
    console.log("You can drive");
}else{
    console.log("You can't drive");
}


/* && - logical AND
   || - logical OR
*/

// TERNARY OPERATOR

const agee = 45;
console.log(agee == 45 ? 'Age is 45' : 'Age is not 45');


// SWITCHES

switch (agee) {
    case 20:
        console.log("You are 20");
        break;
    case 40:
        console.log("You are 40");    
        break;
    case 45:
        console.log("You are 45");
        break;

    default:
        console.log("You are of unknown age");
        break;
}