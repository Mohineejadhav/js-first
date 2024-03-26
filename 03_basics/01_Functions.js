
function addNumbers(num1, num2){
   console.log(num1+num2); 
}
// addNumbers() //NaN because we have not provided parameters
// addNumbers(4,5) // 9
// addNumbers(4,"5") //45
// addNumbers(4,'a') //a

const result=addNumbers(3,5) //8 is printed here 
console.log(result); //undefined because here function is not returning any value it is just printing the value



function addNumbers1(num1, num2){
    console.log(num1+num2);   
    return num1+num2
}
const result2=addNumbers1(4,5)  //9 is first printed here then in next line 9 returned 
console.log(result2); //9



function addNumbers2(num1, num2){
      
    return num1+num2
    console.log("add numbers "); // code after return statement is not excuted because it is unreachable  
}
console.log( addNumbers2(8,9))//17

function logginUser(username){
      return `${username} is logged in`
}
logginUser("Mohinee")//doesn't print any value
console.log(logginUser("Mohinee")); //Mohinee is logged in
console.log(logginUser()); // undefined is logged in
console.log(logginUser)// [Function: logginUser]

function logginUser1(username){
    if(!username){        //  !username=> username===undefined
        console.log("Please Enter the Username");
    }
    return `${username} is logged in`
}

console.log(logginUser1())
// Please Enter the Username
// undefined is logged in 


function calculateCartPrice(num1){
    return num1;
}
// console.log(calculateCartPrice(100,200,300));//100

function calculateCartPrice1(...num1){
    return num1;
}
// console.log(calculateCartPrice1(100,200,300));//[100,200,300]

function calculateCartPrice2(val1, val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice2(100,200,300,400,500)); //[300,400,500]

const user={
    username:"Mohinee",
    price:100
}

function handleObject(myObject){
    console.log(`Username is ${myObject.username} and the price is ${myObject.price}`);
}
handleObject(user)//Username is Mohinee and the price is 100
handleObject({ username:"Ram",  price:399})//Username is Ram and the price is 399

const myArray=[12, 23, 34, 56]
function getArray(Array){
   return Array[2];
}
console.log( getArray(myArray)); //34

console.log(getArray([15, 36, 78, 98])) // 78
                    