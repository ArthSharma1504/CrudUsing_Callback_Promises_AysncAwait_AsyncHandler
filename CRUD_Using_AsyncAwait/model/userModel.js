const db = require('../config/db').promise();

exports.getAllUsers = function() {
    return db.query('SELECT * FROM users');
};

exports.createUser = function(userData) {
    return db.query('INSERT INTO users SET ?', userData);
};

exports.updateUser = function(id, userData) {
    return db.query('UPDATE users SET ? WHERE id = ?', [userData, id]);
};

exports.deleteUser = function(id) {
    return db.query('DELETE FROM users WHERE id = ?', id);
};
