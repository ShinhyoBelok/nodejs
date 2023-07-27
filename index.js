const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end;
    });
  } else if ( req.url === '/about' ) {
    fs.readFile('about.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end;
    });
  } else if ( req.url === '/contact-me' ) {
    fs.readFile('contact-me.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end;
    });
  } else {
    fs.readFile('404.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end;
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
