const User = require('../model/userModel');

exports.getAllUsers = (req , res) => {
    User.getAllUsers((err,users) => {
        if(err){
            res.status(500).json({error:err});
        }else{
            res.json(users);
        }
    });
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    User.createUser(newUser, (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'User created successfully', result });
    });
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    User.updateUser(id, updatedUser, (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'User updated successfully', result });
    });
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.deleteUser(id, (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'User deleted successfully', result });
    });
};