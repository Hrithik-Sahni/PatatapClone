var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/circle.html'));
});


app.listen(process.env.PORT||3000  ,process.env.IP , function(){
    console.log("Server has started !!")
})