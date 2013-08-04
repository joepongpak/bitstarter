var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());
var filename = "index.html";
app.get('/', function(request, response) {
var date = fs.readFileSync(filename);
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
