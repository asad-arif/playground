const fs = require('fs');

fs.appendFileSync('./demo.tsx',"This")

const file = fs.readFileSync('./demo.tsx', {encoding:'utf-8'})

console.warn(file)