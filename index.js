const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('this will have index.html data once I figure it out');
});

server.listen(7890, () => {
  console.log('listening on 7890')
});

