//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100  //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')//symbol

console.log(id === anotherId);//false because symbols are unique though the value can be same

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //Array

let myObj = {           //object
    name: "hitesh",     //Objects as variables are written in curly braces
    age: 22,
}

const myFunction = function(){  //Function
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3