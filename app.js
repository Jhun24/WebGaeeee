var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var session = require('express-session')

app.set('view engine', 'html')
app.set('views', 'views')

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('views'));

app.post('/login', function(req,res){
  var id = req.body.id;
  var ps = req.body.ps;

  res.send("Success")
  console.log(id+ps)
});

app.get('/', function(req, res){
  res.render('login.html')
});

app.get('/sign', function(req, res){
  res.render('sign.html')
});

app.listen(5000,function(){
  console.log("Port On");
});
