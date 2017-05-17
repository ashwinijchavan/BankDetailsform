var definition = {
  name: {type: String},
  status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
  sapRefNumber: {type: String},
  effectiveDate: {type: Date, required: true},
  reason: {type: String},
  remarks: {type: String},
  createdOn: {type: Date},
  lastUpdatedOn: {type: Date},
  brands: [{
    name: {type: String},
    status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
    effectiveFromDate: {type: Date, required: true},
    reason: {type: String},
    remarks: {type: String},
    ships: [{
      name: {type: String, required: true},
      code: {type: Number},
      rating: {type: Number},
      class: {type: String},
      catgeory: {type: String},
      type: {type: String},
      subType: {type: String},
      multiDeckAvailable: {type: Boolean},
      status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
      effectiveDate: {type: Date, required: true},
      remarks: {type: String},
    }]
  }]
}