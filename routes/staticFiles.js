var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname,'public');
app.use(express.static(dir));
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});

console.log(info);
//this is taken from a stack overflow answer on how to serve static files with node
