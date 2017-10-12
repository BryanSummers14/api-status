var express = require('express');

var app = express();

var port = +process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('welcome home');
});

app.get('/500', (req, res) => {
    res.status(500).send('Something broke!');
});

app.listen(port, function(err) {
    console.log('Listening on port '+ port);
});