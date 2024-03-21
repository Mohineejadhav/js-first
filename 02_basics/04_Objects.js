// let olaUser=new Object();  //Singleton Object
// olaUser.id="1234"
// olaUser.name="Mohinee"
// console.log(olaUser.id);
// console.log( olaUser);

const olaUser={}
olaUser.id="713"
olaUser.name="Mohinee"
olaUser.isloggedIn=false

olaUser.fullName={
    username:{
        FirstName:"Mohinee",
        LastName:"Jadhav"
    }
}
// console.log(olaUser);
// {
//     id: '713',
//     name: 'Mohinee',
//     isloggedIn: false,
//     fullName: { username: { FirstName: 'Mohinee', LastName: 'Jadhav' } }
//   }
// console.log(olaUser.fullName.username);//{ FirstName: 'Mohinee', LastName: 'Jadhav' }

let obj1={1:"a",2:"b"}
let obj2={2:"a",3:"b"}
let obj3={4:"a",5:"b"}

let obj4={obj1,obj2,obj3}
// console.log(obj4);
// {
//     obj1: { '1': 'a', '2': 'b' },
//     obj2: { '2': 'a', '3': 'b' },
//     obj3: { '4': 'a', '5': 'b' }
// }
let obj5=Object.assign({},obj1,obj2,obj3)
// console.log(obj5); //{ '1': 'a', '2': 'a', '3': 'b', '4': 'a', '5': 'b' }
let obj6={...obj1,...obj2,...obj3}
// console.log(obj6); //{ '1': 'a', '2': 'a', '3': 'b', '4': 'a', '5': 'b' }

const a1=[{id:"1", name:"Mohinee"},{id:"2", name:"Rohini"},{id:"3", name:"Rohit"}]
// console.log(a1[1].name);  //Mohinee
// console.log(Object.keys(a1[1])); //[ 'id', 'name' ]
// console.log(Object.values(a1[1]));//[ '2', 'Rohini' ]
// console.log(Object.entries(olaUser));
// [
//     [ 'id', '713' ],
//     [ 'name', 'Mohinee' ],
//     [ 'isloggedIn', false ],
//     [ 'fullName', { username: [Object] } ]
//   ]

console.log(olaUser.hasOwnProperty('name'))//true
console.log(olaUser.hasOwnProperty('userame'))//false





