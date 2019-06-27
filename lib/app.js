const { createServer } = require('http');
// const { readFile } = require('./readFile');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('hi');
});

module.exports = app;

//test for pathways red. green blue
//testing for reading file in readFile function
//then bring all together