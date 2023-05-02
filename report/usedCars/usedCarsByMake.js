process.stdin.setEncoding('utf-8')
const fs = require('fs')
const csv = require('csv-parser')
let count = 0;


console.log('Find total number of cars by make')
console.log('Type a make of a car')
process.stdin.on('readable', () => {
  let userInput;
  while((userInput = process.stdin.read()) !== null)
  {
    userInput = userInput.trim()
    console.log(`You have entered ${userInput}.`)
    findCars(userInput)
    }
  })

function findCars(make) {
  fs.createReadStream('../data/usedCars.csv')
  .pipe(csv())
  .on('data', (row) => {
    if(make === row.make) {
      count++
    }
  })
  .on('end', () => {
    console.log(`Number of matched cars: ${count}`)
  })
}