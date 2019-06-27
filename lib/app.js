const { createServer } = require('http');
const { parse } = require('url');
const { readFile } = require('./readFile');

const app = createServer((req, res) => {
  res.statusCode = 200;
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/index.html') {
    readFile('/public/index.html', (err, content) => {
      //line given to me by Alex and Lili reads out error
      console.log('in callback');
      if(err && err.code === 'ENOENT') {
        res.end('file not found');
      } else {
        res.end(content);
      }
    });
  }
});

module.exports = app;

//test for pathways red. green blue
//testing for reading file in readFile function
//then bring all together
