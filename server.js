var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
