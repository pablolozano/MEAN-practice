var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
   var q = url.parse(req.url, true);
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(q.host);
   res.end();
/*fs.readFile('demofile1.html', function(err, data) {
   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(data);
   res.end();
});*/
}).listen(8080);