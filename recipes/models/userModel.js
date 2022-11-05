const mongoose = require("mongoose");
const errMsg = "User must have a";

const userSchema = new mongoose.Schema({
    name: {
	    type: String,
	    require: [true, `${errMsg} name.`]
	},
    username: {
	    type: String,
	    require: [true, `${errMsg} username.`],
	    unique: true
	},
    password: {
	    type: String,
	    require: [true, `${errMsg} password.`]
	},
    email: {
	    type: String,
	    require: [true, `${errMsg} email.`]
	}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
