const fs = require('fs')
const csv = require('csv-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter
const csvWriter = createCsvWriter({
  path: 'cars.csv',
  header: [
    {id: 'make', title: 'Make'},
    {id: 'model', title: 'Model'},
    {id: 'color', title: 'Color'},
    {id: 'year', title: 'Year'}
  ]
})
let beforeCount = 0
let afterCount = 0

const cars2010 = [] 

fs.createReadStream('../data/usedCars.csv')
.pipe(csv())
.on('data', (row) => {
  if(row.year === 2010 || row.year > 2010){
    cars2010.push(row)
    afterCount++
    console.log(`Cars built on 2010 and after 2010: ${afterCount}`)
  }
  else {
    beforeCount++
    console.log(`Cars built before 2010: ${beforeCount}`)
  }
})
.on('end', () => {
  console.log("finished reading data")
  
  csvWriter.writeRecords(cars2010)
  .then(() => console.log('finished writing file'))
})
