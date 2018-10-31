const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

const array = JSON.parse(data)
console.log(array.length)

let averageAge = 0;
array.forEach(function(user){
averageAge += user.age / array.length
})
console.log(averageAge);

let s = ""
array.forEach(function(user){
    s += user.age + " " + user.name + ", "
})
s = s.slice(0, -2);
console.log(s)

const pathToCSV = path.resolve(__dirname, 'file.csv');
fs.writeFileSync(pathToCSV, s)
