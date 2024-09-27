const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

exports.getAllUsers = asyncHandler(async (req, res) => {
    const [users] = await User.getAllUsers();
    res.json(users);
});

// Controller function to get a user by id
exports.getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id; // Extract the id from the URL
    const [user] = await User.getUserById(userId); // Query the database to get the specific user

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});


exports.createUser = asyncHandler(async (req, res) => {
    const newUser = req.body;
    const result = await User.createUser(newUser);
    res.json({ message: 'User created successfully', result });
});

exports.updateUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    const result = await User.updateUser(id, updatedUser);
    res.json({ message: 'User updated successfully', result });
});

exports.deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const result = await User.deleteUser(id);
    res.json({ message: 'User deleted successfully', result });
});
