let array = process.argv.slice(2);
array = array.map(x => parseInt(x));
console.log(array)

let sum = array.reduce((acc, x) => acc + x)
console.log(sum)

let average = sum/array.length
console.log(average)
