const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'student.csv',
  header: [
    {id: 'name', title: 'First'},
    {id: 'age', title: 'Age'},
    {id: 'gender', title: 'Gender'},
    {id: 'hobbies', title: 'Hobbies'}
  ],
  append: false
})

const students = [
  {name: 'Jake', age: 22, gender: 'Male', hobbies: 'Gaming'},
  {name: 'Sarah', age: 19, gender: 'Female', hobbies: 'Running'}
]

csvWriter.writeRecords(students)
.then(() => console.log('finished writing file'))
// .then(() => console.log(students))