/* http: //localhost:8080/?num1=2&num2=2*/

var http = require('http')
var url = require('url')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var q = url.parse(req.url, true).query
    var a = Number(q.num1)
    var b = Number(q.num2)
    var result = require('./operation').addNumer(a, b)
    res.end(result.toString())
}).listen(8080)