const csv = require('csv-parser')
const fs = require('fs')
let femaleCount = 0
let maleCount = 0 

// fs.createReadStream('./data/data.csv') -- read the data file
fs.createReadStream('./data/languages.csv')
.pipe(csv())
.on('data', (row) => {
  // row.name -- for data.csv
  if(row.language === 'Georgian') {
    if(row.gender === 'Male'){
      maleCount++ 
      console.log(`There are ${maleCount} males who can speak Georgian`)
    }
    else if(row.gender === 'Female'){
      femaleCount++ 
      console.log(`There are ${femaleCount} females who can speak Georgian`)
    }
  }
})
.on('end', () => {
  console.log('CSV file read')
})