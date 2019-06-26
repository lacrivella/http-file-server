const app = require('./lib/app');

app.listen(7890, () => {
  console.log('listening on 7890');
});

const fs = require('fs');
fs.readFile(__dirname + '/public/index.html', { encoding: 'utf8' }, (err, content) => {
  if(err) return console.error(err);
  console.log(content);
});
