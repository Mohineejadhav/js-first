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
//if we write console.log(this) in browser console then it will give window...because it is global object in

console.log(this)//{}

function coffee(){
    let username="Mohinee"
    console.log(this.username) // undefined
    console.log(this)
}
//Why this keyword is not working for functions???

coffee()