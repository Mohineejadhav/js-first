/*--------Number Conversion-------*/
let score="26"
let convertedScore=Number(score)  //String is converted into number
// console.log(typeof convertedScore);

//"33"=33
//"33qdr"=NaN Not A Number
//true=1;false=0;
//undefined=NaN
//null=0


/*--------Boolean Conversion-------*/
let isLoggedIn=null 
let convertBoolean=Boolean(isLoggedIn);
// console.log(convertBoolean);

//for 1 2 3 any number ==true for 0=false
//for ""=false for nonempty string=true
//undefined==false
//null=false

/*--------String Conversion-------*/
let isstring=null
let convertintoString=String(isstring);
console.log(typeof convertintoString);

//null,undefined,any number, boolean all can be converted into string 

/* ***************************Operations************************** */

//negative
let val=8
let negval=-val
// console.log(negval);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //Power//8
// console.log(2%2);
// console.log(2/2);

let str1="Mohinee"
let str2=" Jadhav"
let str3=str1+str2
console.log(str3);

// console.log(1+"2")//12
// console.log("1"+2);//12
// console.log("1"+"2");//12
// console.log("1"+2+2);//122
// console.log(2+3+"5");//55

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


/* ************************** Comparison ***********************************/

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true

// the reason is that euality check == and comparision operator >, <, <=, >= work differently 
// Comapator conver null to a number treating it as 0 thats why null>0 is false and null>=0 is true

console.log(undefined>0);//false
console.log(undefined==0);//false
console.log(undefined>=0);//false

//=== ..checks values as well as datatype

console.log("2"==2); //true
console.log("2"===2);//false