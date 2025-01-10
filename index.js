'use strict';

const path = require('path');

const express = require('express');
const promBundle = require("express-prom-bundle");

const app = express();

app.use(promBundle({includeMethod: true}));

// Serve the index file if no document is requested
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Routes for testing
app.all('/a', function (req, res) {
    res.status(200).send("a");
});

app.all('/b', function (req, res) {
    res.status(404).send("b");
});

const server = app.listen(3000);

console.log('App started on port 3000');

module.exports = { server };