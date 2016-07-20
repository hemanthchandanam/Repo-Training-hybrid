
//  http://localhost:8080/calc?method=sub&v1=10&v2=2
var calc = require('./calc');
var http = require('http');
var url = require("url");
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });


    var query = url.parse(request.url, true).query;
    var method = query["method"];
    var v1 = query["v1"];
    var v2 = query["v2"];
    response.write('<!DOCTYPE "html">');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Result page :</title>');
    response.write('</head>');
    response.write('<body>');
    if (method == "add") {
        var c = calc.add(v1, v2);
        response.write(c.toString());
    } else if (method == "sub") {
        var c = calc.sub(v1, v2);
        response.write(c.toString());
    } else if (method == "mult") {
        var c = calc.mult(v1, v2);
        response.write(c.toString());
    } else if (method == "div") {
        var c = calc.div(v1, v2);
        response.write(c.toString());
    } else if (method == "mod") {
        var c = calc.mod(v1, v2);
        response.write(c.toString());
    } else {
        response.write("wrong call");
    }
    response.write('</body>');
    response.write('</html>');
    response.end();
});
 
server.listen(8080);
console.log('Server is listening');
