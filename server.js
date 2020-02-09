const path = require('path');
const express = require('express');

const app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);
app.use(express.static(__dirname + '/dist/jhndagon-mercado'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/jhndagon-mercado/index.html'));
});

app.listen(process.env.PORT || 5000);
