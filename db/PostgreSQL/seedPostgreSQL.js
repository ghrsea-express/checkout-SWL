const fs = require('fs')
const { Generator } = require('../../helperFn/dataGenerator.js')
const home = require('os').homedir()
var path = home + '/Coding/db/data/'

let start = 1
let max = 4
let current = 1
let count = 0
console.time('Data for PostgreSQL completed in');

let seedEntry = (start, max, current) => {
  if (start > max) {
    console.timeEnd('Data for PostgreSQL completed in')
    current = 1
    return
  } else {

    let string = ""
    
    for(let i = 0; i <= 500000; i++) {
      let generatedData = Generator()
      let entry = `${count},${generatedData.itemID},${generatedData.name},${generatedData.price},${generatedData.store},${generatedData.returnDays}`

      string += entry + '\n'
      current++
      count++
    }

    fs.appendFile(path + 'entryData4.csv', string, (err) => {
      if (err) throw err
      console.log('Finished loop ' + start)
      start++;
      seedEntry(start, max, current)
    })
  }
}

seedEntry(start, max, current)
