const { createServer } = require('http');

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Puppies</title>
</head>
<body>
    <h1>LIST OF GOOD DOGS</h1>
    <ul>
      <li>Nolan</li>
      <li>Corbin</li>
      <li>Magic</li>
      <li>Eliot</li>
    </ul>
</body>
</html>
  `);
});

module.exports = app;