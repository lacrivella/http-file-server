const fs = require('fs');

function readFile(path, callback) {
  console.log(path)
  fs.readFile(path, { encoding: 'utf8' }, callback);
}

module.exports =  { readFile };
