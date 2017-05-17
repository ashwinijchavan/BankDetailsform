'use strict';

var mongoose= require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var definition = new Schema({
	type: { type : String},
	name: { type : String},
	branchName: { type : String},
  codes:{
    micr: { type : String},
    swift: { type : String},
    sort: { type : String},
    ifsc: { type : String}
  },
  createdOn: {type: Date},
  lastUpdatedOn: {type: Date},
  status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
  account: [
    {
      sapRefNumber: {type: Number},
      type: {type: String},
      accNumber: {type: Number},
      status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
      currency: {
        type: String,
        enum: ["INR", "USR", "EUR", "GBP", "SGD", "AUD"]
      }
    }
  ]
})

module.exports = mongoose.model('BankSchema',definition);