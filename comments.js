// create web server
const express = require('express');
const app = express();
app.use(express.json());
const comments = require('./comments.json');