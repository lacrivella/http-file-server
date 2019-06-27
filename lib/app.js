const { createServer } = require('http');
const { parse } = require('url');
const { readFile } = require('./readFile');

const app = createServer((req, res) => {
  res.statusCode = 200;
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/index.html' || pathname === '/') {
    readFile('./public/index.html', (err, content) => {
      console.log('in callback');
      console.log(content);
      if(err && err.code === 'ENOENT');
      res.end(content);
    });
  } else {
    res.statusCode = 404;
    res.end('file not found');
  }
});

module.exports = app;

//test for pathways red. green blue
//testing for reading file in readFile function
//then bring all together
