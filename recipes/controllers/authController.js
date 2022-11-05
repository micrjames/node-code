const User = require("../models/userModel");

exports.signUp = async (req, res) => {
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    res.status(200).json({ status: "success" });
};
