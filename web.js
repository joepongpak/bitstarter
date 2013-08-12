var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());
var filename = "index.html";
app.get('/', function(request, response) {
app.use("/fonts", express.static(__dirname + '/fonts'));
var data = fs.readFileSync(filename, "utf8");
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
