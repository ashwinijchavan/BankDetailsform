var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BankSchema = new Schema({
  banktype: { type : String},
  bankname: { type : String},
  branchName: { type : String},
  
    micr: { type : String},
    swift: { type : String},
    sort: { type : String},
    ifsc: { type : String},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  status: {
    type: String, 
    enum: ["Draft", "Submitted", "Approved", "Rejected"]
  },
  sapRefNumber: {type: Number},
  type: {type: String},
  accNumber: {type: Number},

  currency: {
        type: String,
        enum: ["INR", "USR", "EUR", "GBP", "SGD", "AUD"]
      }
    });
var Bank=module.exports=mongoose.model('BankData',BankSchema);

module.exports.getData=function(callback, limit){
  Bank.find(callback).limit(limit);
}
//Create Rounds
module.exports.addBank=function(bank, callback){
  Bank.create(bank, callback);
}
