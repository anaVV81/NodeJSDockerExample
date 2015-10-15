var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();
app.get('/', function( req, res) {
  res.send('Prueba de Ana - Hello World');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
