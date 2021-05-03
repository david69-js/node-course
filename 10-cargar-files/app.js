const http = require('http')
const fs = require('fs');
const path = require('path')


http.createServer((req, res) =>{
   console.log(`${req.method} request ${req.url}`);
    if(req.url == '/'){
        fs.readFile('./public/index.html', 'utf-8', (err, html) =>{
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(html)
        })
    }else if(req.url.match(/.css$/)){
        const reqPath = path.join(__dirname, 'public', req.url);
        const fileSream = fs.createReadStream(reqPath, 'utf-8');
        res.writeHead(200, {'content-type': 'text/css'})
        fileSream.pipe(res);
    } else{
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('404 error')
    }

}).listen(3000);

console.log('Inicilizated server');