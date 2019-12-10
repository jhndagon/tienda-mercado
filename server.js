const path = require('path');
const express = require('express');


app.use(express.static(__dirname + '/dist/jhndagon-mercado'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/jhndagon-mercado/index.html'));
});

app.listen(process.env.PORT || 5000);
