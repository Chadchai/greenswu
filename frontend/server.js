const express = require('express');

// Create an Express application
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const server = http.createServer(app);
const fs = require('fs');
const path = require('path');
app.use(express.static(path.join(__dirname + '/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the port for the server to listen on
app.use(express.static(path.join(__dirname + '/build')));
app.use('/*', function (req, res) { 
  res.header('Access-Control-Allow-Origin', '*');
 res.sendFile(path.join(__dirname + '/build/index.html'),
function (err) {
if (err) {
 res.status(500).send(err);
}
}
);
});

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});