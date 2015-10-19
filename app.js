var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/',function(req,res){
	res.send('Hello World');
});

app.listen(3000,function(){
	console.log('app is listenning at port 3000');
});