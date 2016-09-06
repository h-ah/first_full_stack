var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	school: {
		type: String,
		required: true
	},
	publisher: String,
	class: {
		type: String,
			required: true
	},
	bookcode: {
		type: String,
		required: true
	},
	bookname: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	available: {
		type: Boolean,
		default: true
	}
});

module.exports = mongoose.model("Book", BookSchema);