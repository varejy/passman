var express = require('express');
var app     = express();
var rootDir = __dirname;
var port    = process.env.PORT || 3000;

app.use(express.static(rootDir + '/node_modules'));
app.use(express.static(rootDir + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(rootDir + '/index.html')
});

app.get('/favicon.ico',function(req,res){
    res.sendFile(rootDir + '/favicon.ico')
});

app.listen(port, function () {
    console.log('Server started on port: ' + port)
})
