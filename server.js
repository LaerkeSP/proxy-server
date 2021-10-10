const app = require('express')();
 
// API endpoint
app.get('/', (req,res)=>{
    res.json("Welcome to GeeksforGeeks !");
})
 
// Launching application on several ports
app.listen(5000);
app.listen(3001);
app.listen(3002);
app.listen(3003);






// var seaport = require('seaport');
// // var ports = seaport.connect(3000);
// // var ports = seaport.connect("localhost", 3000);
// var request = require('request');
 
// ports.get('web@1.2.x', function (ps) {
//     var u = 'http://' + ps[0].host + ':' + ps[0].port;
//     request(u).pipe(process.stdout);
// });









// var seaport = require('seaport');
// var ports = seaport.connect('localhost', 5001);
// var http = require('http');
 
// var server = http.createServer(function (req, res) {
//     res.end('version 0.0.0\r\n');
// });
 
// server.listen(ports.register('http@0.0.0'));