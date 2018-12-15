var express = require('express');
var path = require('path');
var open = require('open');

var app = express();
app.use('/script/', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')));
app.use('/images/', express.static(path.join(__dirname, '/images/')));
app.use('/js/', express.static(path.join(__dirname, '/public/js/')));
app.use('/styles', express.static(path.join(__dirname, '/styles')));

var appDir = path.join(__dirname, './public/');
app.get('*', function (req, res) {
    var fregmentId = req.url.substr(1);
    if(fregmentId) {
        res.sendFile(path.join(appDir, fregmentId));
    } else {
        res.sendFile(path.join(appDir, "index.html"));
    } 
    
});

var port = 3000;
app.listen(port, function (error) {
    console.log('Server running at http://localhost:' + port);
    if (error) {
        console.log('Error Occured:', error);
    }
});
