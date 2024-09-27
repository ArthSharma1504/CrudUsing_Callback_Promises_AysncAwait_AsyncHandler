const mysql = require('mysql2');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "crud_db"
});

db.connect((err) => {
    if(err){
        console.log('Database connection failed :(' + err.stack);
        return;
    }
    console.log('Connection was successful :)');
})

module.exports = db;