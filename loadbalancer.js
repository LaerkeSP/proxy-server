var http = require('http'),
    httpProxy = require('http-proxy'); //npm install http-proxy --save

var myHost = '127.0.0.1';
// var randomPort = Math.floor(Math.random() * 2000) + 4000;
var randomPort = 5000
var port = 3000;

// var link = 'http://' + host + ':' + randomPort
// console.log(randomPort)

var proxy = new httpProxy.createProxyServer({
    target: {
        host: myHost,
        port: randomPort
    }
});

var proxyServer = http.createServer(function (res, req){
    proxy.web(req, res);
})

// proxyServer.on('upgrade', function (req, socket, head){
//     proxy.ws(req, socket, head);
// })

console.log('listening to port: ' + port);
proxy.listen(port)
















// http.createServer(function (req, res) {
//     setTimeout(function(){
//         proxy.web(req, res, {
//             target: link
//         });
//     }, 500);
// }).listen(8008);


// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
//     res.end();
// }).listen(9008);


// proxy.on('proxy', function (proxyRes, req, res){
//     // res.end('Hello from port ' + randomPort)
//     console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
// })

// var server = http.createServer(function(req, res){
//     proxy.web(req, res, {
//         target: link
//     })
// })

// console.log('listening to port: ' + port);
// server.listen(port);

















// const http = require('http');
// const port = Math.floor(Math.random() * 5000) + 4000;
// const host = 'localhost'; 


// const server = http.createServer(function (req, res){
//     res.end('you are on port: ' + port);
// });

// server.listen(port, host, function(){
//     console.log('listening to port: ' + port);
// })