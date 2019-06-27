const fs = require('fs');

fs.readFile(__dirname + '/public/index.html', { encoding: 'utf8' }, (err, content) => {
  if(err) return console.error(err);
  console.log(content);
});

module.exports =  { readFile };