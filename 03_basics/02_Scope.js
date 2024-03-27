const a=10
let b=20
var c=30

// console.log(c) //30

if(true){
    // console.log(a) //Cannot access 'a' before initialization
    // console.log(b)//Cannot access 'b' before initialization
    // console.log(c) //30
    const a=40;
    let b=50
    var c=80
    // console.log(c)//80
}
const array=[1,2]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(c) // prints 80 2 times
    // console.log(b)// prints 20
    
}

// console.log(a)//10
// console.log(b)//20
// console.log(c)//80

function one(){
    const username="Mohinee"

    function two(){
        const balance=100
        console.log(username);
        console.log(balance);
    }
    // console.log(balance); // error... balance is not defined
    two()
    
    //Mohinee
    //100
}
// one()
// two()// error...two is not defined

if(true){
    const username="Mohinee"
    if(username==="Mohinee"){
        const balance=100
        // console.log(username+balance);//Mohinee100
    }
    // console.log(balance);//error...balance is not defined
}
// console.log(username);// error...username is not defined

// &&&&&&&&&&&&&&&&&&&&&&&&& Interesting &&&&&&&&&&&&&&&&&&&&&&&&&&

console.log(first(5)); //6

function first(num){
    return num+1;
}
console.log(first(5)); //6


// console.log(second(5)); //Cannot access 'second' before initialization
const second=function(num){
    return num+2;
}
console.log(second(5)); //7
