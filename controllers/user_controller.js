const User = require("../models/User.js");
const bcrypt = require("bcryptjs")
module.exports.getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    }
    catch (err) {
        return next(err);
    }

    if (!users) {
        return res.status(500).json({ message: "Unexpected Error Occured" })
    }
    return res.status(200).json({ users })
}

module.exports.singup = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (
        !name &&
        name.trim() === "" &&
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, email, password: hashedPassword });
        user = await user.save();
    } catch (err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(201).json({ user });
};

module.exports.updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    if (
        !name &&
        name.trim() === "" &&
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);

    let user;
    try {
        user = await User.findByIdAndUpdate(id, {
            name,
            email,
            password: hashedPassword,
        });
    } catch (errr) {
        return console.log(errr);
    }
    if (!user) {
        return res.status(500).json({ message: "Something went wrong" });
    }
    res.status(200).json({ message: "Updated Sucessfully" });
};