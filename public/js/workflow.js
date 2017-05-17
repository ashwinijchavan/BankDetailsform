var definition = {
	businessProcess: { type : String, required: true },
	function: { type : String, required: true },
	productCategory: { type : String },
	productSubCategory: { type : String },
	entityCode: { type : Number },
	enityName: { type : String, required: true },
	parentEnityName: { type : String},
	workflowRefCode: { type : Number, required: true },
	isLocked: { type : Boolean, required: true },
	isTemp: { type : Boolean},
  createdOn: {type: Date},
  lastUpdatedOn: {type: Date},
  status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true},
  assignment: [
    {
      assignedTo: {type: String},
      assignmentDate: {type: Date},
      approverRowNumber: {type: Number},
      status: {type: String, enum: ["Draft", "Submitted", "Approved", "Rejected"], required: true}
    }
  ]
}