const http = require('http')
const OrdersObject = require('./schema') 

http.createServer((req, res) =>{
    if(req.url == '/'){
        res.writeHead(200, {'content-type': 'text/json'})
        res.end(JSON.stringify(OrdersObject))
    }else if(req.url == '/orders-process'){
        orderProcess(res)
    }
    else if(req.url == '/orders-sopa'){
        orderSopa(res);
    }
    else{
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('404 error')
    }
}).listen(3000)

console.log('Inicializated server');

const orderProcess = (res)=>{
    const response = OrdersObject.filter(item => {
        return item.state == 'process';
    });
    res.writeHead(200, {'content-type': 'text/json'})
        res.end(JSON.stringify(response))
}

const orderSopa = (res)=>{
    const response = OrdersObject.filter(item => {
        return item.name == 'sopa';
    });
    res.writeHead(200, {'content-type': 'text/json'})
    res.end(JSON.stringify(response))
}