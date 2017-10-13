var express = require('express');

var app = express();

var port = +process.env.port || 80;

app.get('/', (req, res) => {
    res.status(200);
    res.setHeader('Content-Type', 'text/plain');
    res.send('welcome home');
});

app.get('/500', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(500).send('Something broke!');
});

app.listen(port, function(err) {
});