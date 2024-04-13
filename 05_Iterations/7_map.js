const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

/* &&&&&&&&&&&&   VIMP

map() is used when you want to transform each element of the array in some way.

If you want to modify the elements of an array based on certain conditions, you would typically use the map()

both filter and map returns new array
*/