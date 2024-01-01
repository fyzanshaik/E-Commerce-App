const mysql = require("mysql2");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',  // Correct key is 'user', not 'username'
    database: 'node-backend',
    password: 'root'
});


module.exports = pool.promise();
