// create web server
const express = require('express');
const app = express();
app.use(express.json());
const comments = require('./comments.json');

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const { comment } = req.body;
    comments.push(comment);
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});