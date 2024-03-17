let name="Mohinee"
let age=22
// console.log(name+age);

// do not us above method ..prefer below method
// console.log(`Hello my name is ${name} and my age is ${age}`)
//this is called string interpolation

let str1= new String("Sanket")
let str2= new String(" Jagdale")

/******************Methods********************* */
console.log(str1.length)
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.concat(str2));
console.log(str1.charAt(1));
console.log(str1.indexOf('n'));   
console.log(str1.substring(0,4))  //from 0th index to 3rd...4 is excluded
console.log(str1.slice(-6,-2));   //from 6th index starting from last to index 2 starting from last
console.log(str2.trim());         //removes starting and ending white spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

let s="Mohinee-Jadhav-Latur"
console.log(s.split("-"))

