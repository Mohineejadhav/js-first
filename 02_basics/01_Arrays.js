const a1=[1, 2, 3, 4, 5]
console.log(a1[3]);

//Array Methods

a1.push(6)
a1.push(7)
a1.push(8)
a1.pop()

a1.unshift(9)
a1.shift()
console.log(a1)

console.log(a1.includes(17))
console.log(a1.indexOf(7));

const newarray=a1.join()
console.log(newarray)       
console.log(typeof newarray);   //String

//Slice and Splice 
const a2=a1.slice(1,3)
console.log(a1);
console.log(a2);

const a3=a1.splice(1,3)
console.log(a1);
console.log(a3);