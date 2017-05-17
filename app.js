var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
var Bank = require('./bank.model');// added schema page location
var port=8080;
var db = 'mongodb://localhost/bankData'; //we added database path
mongoose.connect(db);
//var db = mongoose.connection;
//app.use(express.static(__dirname + "/public"));
/*
app.get('/',function(req,res){
	res.send("hello world")
})
*/
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
});

app.post('/addData', function(req,res){
 var newBank = req.body;
 console.log(req.body);
          Bank.addBank(newBank, function(err){
          if(err) {console.log(err);}else{
          res.json({success: true, msg: 'Data added successfully!'});
    }
   });
});

app.listen(port,function(){
	console.log('app listning on port '+port);
});