var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BankSchema = new Schema({
	banktype: { type : String},
	bankname: { type : String},
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
});

module.exports=mongoose.model('BankModelSchema',BankSchema);