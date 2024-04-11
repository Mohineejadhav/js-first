// IIFE=Immediately Invoked Function Expression 

/*
IIFE stands for Immediately Invoked Function Expression.
It's a design pattern in JavaScript where a function is defined and
 then immediately invoked (called) right after it's defined. 
 This pattern is often used to create a new scope and encapsulate 
 variables to avoid polluting the global scope
 */

function coffee(){
    console.log("DB Connected")
}
coffee();// DB connected

//while using iife semicolon is very important 

// iife 

(function coffee1(){
    console.log("DB Connected");
})();

(()=>{
    console.log("DB2 Connected");
})();

((user)=>{
    console.log("DB2 Connected ", user);
})('Mohinee');


