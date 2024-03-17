const score = 400
// console.log(score);//400

const balance = new Number(12.2345)
// console.log(balance);          //[Number:100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2));
//this will give fixed value upto 2 decimals...100.00...if 12.2345 =>12.23

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5)); //it will give a precise score up to specified digits
//123.8966=> 124 ...for 3 digits
//123.9 for 4 digits
//123.90for 5 digits 
//1123.56  => 1.12e+3 for 3 digits

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // gives 10,00,000 ...for better understanding

/************************************** Maths ************************************** */

// console.log(Math); // Object [Math] {}.....it is an object
//Math.pi,Math.sqrt...like this
// console.log(Math.abs(-4));          //coverts negative values to positive
// console.log(Math.round(4.6));       //4.3=>4 4.6=>5
// console.log(Math.ceil(4.2));       //4.2=>5 ...max value
// console.log(Math.floor(4.9));      //4.9=>4...min value
// console.log(Math.min(4, 3, 6, 8));    //3
// console.log(Math.max(4, 3, 6, 8));    //8

console.log(Math.random());       //gives random values between 0 and 1..like 0.67 
console.log((Math.random()*10) + 1); //gives random values between 1 to 10
console.log(Math.floor(Math.random()*10) + 1); //if we want random values with one digit 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //IMP
