var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var BankModelSchema = require('./bank.model');// added schema page location

var db = 'mongodb://localhost:27017/bankData'; //we added database path
mongoose.connect(db);

var port=8080;
app.listen(port,function(){
	console.log('app listning on port '+port);
});