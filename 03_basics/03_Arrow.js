const user={
    username:"Mohinee",
    price:999,

    welcomeMsg: function(){
        console.log(`Welcome ${this.username}`)
    }
}
//this keyword referes to current context
user.welcomeMsg() // Welcome Mohinee
user.username="Ram"
user.welcomeMsg() //Welcome Ram

//***IMP */
//if we write console.log(this) in browser console then it will give window...
//because it is global object in browser

console.log(this)//{}
/*
function coffee(user){
    let username="Mohinee"
    let price={
        price1:700,
        price2:900
    }
    console.log(this.username) // undefined
    console.log(this.price)  //undefined
}
//Why this keyword is not working for functions???

coffee()
*/


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Arrow Function @@@@@@@@@@@@@@@@@@

/********************VIMP******************************/
const juice = (price1,price2) => {//explicit return
    return price1+price2;
}
console.log(juice(30,40));

const juice2 = (num1,num2) => num1+num2 //implicit return 
console.log(juice2(30,40));

const juice3 = (num1,num2) => (num1+num2) //implicit return
console.log(juice3(30,40));

const juice4 = (num1,num2) => ({username:"Mohinee"}) //implicit return
console.log(juice4(30,40));