console.log('We will learn about date and time object in js.');

let today = new Date();
console.log(today); 

let otherDate = new Date('4-3-2004 01:54:08');
otherDate=new Date('June 04 1999');
otherDate=new Date('10/07/1964');
console.log(otherDate);

let a = otherDate.getDay()
a = otherDate.getFullYear()
a = otherDate.getMonth()
a = otherDate.getTime()
a = otherDate.getHours()
a=otherDate.getMinutes()
a=otherDate.getMinutes()
a=otherDate.setDate(10)
a=otherDate.setMonth(3)
a=otherDate.setFullYear(1999)
console.log(a);
