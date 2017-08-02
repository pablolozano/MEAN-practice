var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
/*fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
});*/
}).listen(8080);