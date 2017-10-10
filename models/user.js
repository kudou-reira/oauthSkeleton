const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	facebookId: String,
	twitterId: String,
	savedCharacters: [{
		buildingName: String,
		link: String,
		trainStation: [{type: String}],
		inDatabase: { type: Boolean, default: true},
		apaman: Boolean,
		gaijinPot: Boolean
	}]

});

mongoose.model('users', userSchema);