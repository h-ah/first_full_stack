var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	fullName: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	class: {
		type: String,
			required: true
	},
	school: {
		type: String,
		required: true
	},
	languagee: {
		type: String,
		required: true
	},
	books: [String],
	orderDate: {
		type: Date,
		default: Date.now
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("Student", StudentSchema);