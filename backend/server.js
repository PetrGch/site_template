var static = require('node-static');
var file = new static.Server('.');

console.log('hi' + static);

require('http').createServer(function (req, res) {
    req.addListener('end', function() {
        file.serve(req, res);
    }).resume();
}).listen(3001);