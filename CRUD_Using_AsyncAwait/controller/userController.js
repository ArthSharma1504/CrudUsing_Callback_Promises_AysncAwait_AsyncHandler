const User = require('../model/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const [users] = await User.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await User.createUser(newUser);
        res.json({ message: 'User created successfully', result });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        const result = await User.updateUser(id, updatedUser);
        res.json({ message: 'User updated successfully', result });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.deleteUser(id);
        res.json({ message: 'User deleted successfully', result });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
