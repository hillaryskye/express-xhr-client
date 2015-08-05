var express    = require('express');
var bodyParser = require('body-parser');
var fiddles = require('./routes/fiddles')

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/fiddles', fiddles);
// app.use('/', routes);

var server = app.listen(process.env.PORT || 8080);
console.log('Woot, server started');

module.exports = app;
