var definition = {
  requestCode: {type: String, required: true},
  createdOn: {type: Date, required: true},
  lastUpdatedOn: {type: Date},
  fromNumber: {type: Number},
  toNumber: {type: Number},
  bankName: {type: String},
  bankBranch: {type: String},
  issuingDate: {type: Date},
  expiryDate: {type: Date},
  status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
  denomination: {type: Number}
}