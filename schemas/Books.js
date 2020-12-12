const mongoose = require('mongoose');
const { Schema } = mongoose;

const BooksSchemas = new Schema({
	title: {
		type: String,
		require: true,
	}, 
	writer: {
		type: String,
	}, 
	comment: {
		type: String,
	}, 
	createdAt: {
		type: Date,
		default: Date.now
	}, 
});

module.exports = mongoose.model('Books', BooksSchemas);