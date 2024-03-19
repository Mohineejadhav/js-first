const marvel_heros=["thor", "spiderman", "Ironman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//[ 'thor', 'spiderman', 'Ironman', 'superman', 'flash', 'batman' ]

// console.log(marvel_heros.concat(dc_heros))

// const allHeros=[...dc_heros, ...marvel_heros]
// console.log(allHeros)   //[ 'superman', 'flash', 'batman', 'thor', 'spiderman', 'Ironman' ]

// let a1=[1,2,3,[4,5,6],7,8,[2,3,4[5,6]]]
// let a2=a1.flat(Infinity)
// console.log(a2)

console.log(Array.isArray("Mohinee"))   //false
// console.log(Array.from("Mohinee"))     //['M', 'o', 'h', 'i', 'n', 'e', 'e']
// console.log(Array.from(1,2,3))            //error
// console.log(Array.of(1,2,3))                 //[1,2,3]
console.log(Array.from({name:"Mohinee", age:23})) //[]
console.log(Array.from(1)) //[]