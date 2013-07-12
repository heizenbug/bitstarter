var express = require('express');
var fs = require('fs');
var buffer = new Buffer(40);
var in = fs.readFileSync(index.html);
var out = buffer.toString(in);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
