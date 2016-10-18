var express = require('express');
var app = express();
app.use(express.static(__dirname + '/build'));
app.listen(3333, function () {
    console.log("open http://localhost:3333");
});
