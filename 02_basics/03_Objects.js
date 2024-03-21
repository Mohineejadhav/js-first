//Singleton

//Object Literals

const sym=Symbol("mysym1")

const JsUser={
    name:"Mohinee",
    "full name":"Mohinee Jadhav",
    age:22,
    [sym]:"mysym",  // Very imp symbols are written in this way in objets as key
    email:"mohinee@google.com",
    mobile:8010990850
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"] )
// console.log(JsUser[sym])

// Object.freeze(JsUser)
// console.log(JsUser);

JsUser["full name"]="Ram jadhav"
JsUser[sym]="Mysym345"
// console.log(JsUser)

JsUser.greeting = function(){
    
    console.log("My family happy family")
}
console.log(JsUser.greeting());

JsUser.greeting2= function(){
    console.log(`I ${this.name} will do it anyway`);
}
console.log(JsUser.greeting2());

