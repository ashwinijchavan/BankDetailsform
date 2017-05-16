var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bank = require('./bank.model');// added schema page location
var port=8080;
var db = 'mongodb://localhost/bankData'; //we added database path
mongoose.connect(db);

app.get('/',function(req,res){
	res.send("hello world")
})

app.get('/bankData',function(req,res){
	console.log('getting all bank data');
	Bank.find({})
	.exec(function(err,bankData){
		if(err){
			res.send('error has occured');
		}else{
			console.log(bankData);
			res.json(bankData)
		}
	})
})

app.listen(port,function(){
	console.log('app listning on port '+port);
});