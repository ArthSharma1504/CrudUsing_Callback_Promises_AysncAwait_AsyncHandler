const User = require('../model/userModel');

exports.getAllUsers = (req, res) => {
    User.getAllUsers()
        .then(([users]) => res.json(users))
        .catch(err => res.status(500).json({ error: err }));
};

exports.getUserById = (req, res) => {
    // Extract the user ID from the request parameters
    const userId = req.params.id;

    // Call the method to get the user by ID
    User.getUserById(userId)
        .then(([user]) => {
            // Check if the user exists
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            // Respond with the user data
            res.json(user);
        })
        .catch(err => {
            // Handle any errors that occur during the database operation
            res.status(500).json({ error: err.message });
        });
};


exports.createUser = (req, res) => {
    const newUser = req.body;
    User.createUser(newUser)
        .then(result => res.json({ message: 'User created successfully', result }))
        .catch(err => res.status(500).json({ error: err }));
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    User.updateUser(id, updatedUser)
        .then(result => res.json({ message: 'User updated successfully', result }))
        .catch(err => res.status(500).json({ error: err }));
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.deleteUser(id)
        .then(result => res.json({ message: 'User deleted successfully', result }))
        .catch(err => res.status(500).json({ error: err }));
};
