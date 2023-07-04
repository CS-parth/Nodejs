const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Incoming request for: ${req.url}`);
  console.log(`Request method: ${req.method}`);

  if (req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is the Home page!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is the About page!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
