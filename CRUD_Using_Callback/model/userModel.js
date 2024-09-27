const db = require('../config/db');

exports.getAllUsers = function(callback) {
    db.query('SELECT * FROM users' , callback);
};

exports.createUser = function(userData, callback) {
    db.query('INSERT INTO users SET ?', userData, callback);
};

exports.updateUser = function(id, userData, callback) {
    db.query('UPDATE users SET ? WHERE id = ?', [userData, id], callback);
};

exports.deleteUser = function(id, callback) {
    db.query('DELETE FROM users WHERE id = ?', id, callback);
};