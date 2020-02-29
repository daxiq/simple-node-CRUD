let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let friendSchema = new Schema({
	id: {type: String},
	surname: {type: String},
	lastname: {type: String},
	age: {type: Number, min: 0}
}, {versionKey: false});

let Friend = mongoose.model('Friends', friendSchema);

module.exports = Friend;