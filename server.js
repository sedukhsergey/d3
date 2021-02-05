import http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }
  if (req.url === '/about') {
    if (req.method === 'GET') {
      res.writeHead(200, headers);
      fs.readFile('data.json','utf8',(err, data) => {
        if (err) {
          throw err;
        }
      res.end(data)
      })
    }
  }
  else {
    res.end('Main page')
  }
})

server.listen(3000)
