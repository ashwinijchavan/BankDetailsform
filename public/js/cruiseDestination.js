var definition = {
  name: {type: String, required: true},
  description: {type: String},
  status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
  continent: {type: String},
  effectiveDate: {type: Date, required: true},
  reason: {type: String},
  remarks: {type: String},
  createdOn: {type: Date},
  lastUpdatedOn: {type: Date},
  package: [{
    name: {type: String, required: true},
    supplierProductCode: {type: String},
    sapRefNumber: {type: String},
    isCompanyRecommended: {type: Boolean, required: true},
    supplierRating: {
      rating: {type: Number},
      ratedOn: {type: Date}
    },
    companyRating: {
      rating: {type: Number},
      ratedOn: {type: Date}
    },
    status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
    approvalStatus: {type: String},
    effectiveFromDate: {type: Date, required: true},
    reason: {type: String},
    remarks: {type: String},
    usp: {type: String},
    highlights: [{type: String}],
    sellingTips: {type: String},
  }]
}