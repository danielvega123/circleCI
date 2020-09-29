// http: //localhost:8080/?num1=2&num2=2

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    res.end(require('./server').addNumer(q.num1, q.num2));
}).listen(8080);


exports.addNumer = function(a, b) {
    return a + b
}

// bla bla bla