// let date = new Date();
// console.log(date.toDateString());          //Mon Mar 18 2024
// console.log(date.toISOString());           //2024-03-18T06:28:04.379Z
// console.log(date.toJSON());                //2024-03-18T06:28:04.379Z
// console.log(date.toLocaleString());        //3/18/2024, 6:28:04 AM
// console.log(date.toLocaleDateString());    //3/18/2024
// console.log(date.toLocaleTimeString());    //6:28:04 AM

// //###########VIMP##########//
// console.log(date.toLocaleString('default',{weekday:"long", month:"long"}))  //March Monday 

let mydate=new Date();

// console.log(mydate.getDate());        //18
// console.log(mydate.getDay())          //1 that is monday
// console.log(mydate.getFullYear())     //2024
// console.log(mydate.getHours())        //6

// let newdate=new Date(2024, 2, 18);  // Mon Mar 18 2024
let newdate=new Date(2024, 0, 18, 12, 22); 
console.log(newdate.toLocaleString()) 

let mytimeStamp=Date.now();
console.log(mytimeStamp);
console.log(Math.floor(Date.now()/1000));

