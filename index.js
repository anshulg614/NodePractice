const http = require('http')
const fs = require('fs');
const { resolveSoa } = require('dns');
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.readFile('./index.html', (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    } else if (req.url === '/about.html'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile('./about.html', (err,data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (req.url === '/contact-me.html'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile('./contact-me.html', (err,data) => {
            if (err) throw err;
            res.end(data);
        });
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile('./404.html', (err,data) => {
            if (err) throw err;
            res.end(data);
        });
    }
});

server.listen(port, () => {
    console.log('Server is running on port ' + port)
});