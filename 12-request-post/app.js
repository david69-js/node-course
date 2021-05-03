const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) =>{
    
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./form.html', 'UTF-8').pipe(res)   
       
    }else if(req.method == 'POST'){
        let body = '';
        req.on('data', chunk =>{body+= chunk;})

        req.on('end', () =>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Results</title>
</head>
<body>
        <h1>Data form</h1>
        <p>${body}</p>
</body>
</html>
            `)
        })
    }
}).listen(3000)

console.log('Inicializated server');
