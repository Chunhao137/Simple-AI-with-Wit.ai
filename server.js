var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/microphone', express.static(path.join(__dirname, '/microphone')));

app.listen(8080);

//Lets start our server
// server.listen(PORT, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", PORT);
// });