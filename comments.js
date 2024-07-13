// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/comments', function(req, res) {
    res.render('pages/comments');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comments', function(req, res) {
    var name = req.body.name;
    var comment = req.body.comment;
    var data = name + ": " + comment + "\n";
    fs.appendFile('comments.txt', data, function(err) {
        if (err) throw err;
    });
    res.render('pages/comments');
});

app.listen(80);
console.log('80 is the magic port');