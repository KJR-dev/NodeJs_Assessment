require('dotenv').config();
const mysql = require('mysql2');

console.log("user", process.env.USER);
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected to MySQL server with threadId: ' + connection.threadId);

    connection.query("CREATE DATABASE IF NOT EXISTS NodeJS_ASSESSMENT", (err, res) => {
        if (err) {
            console.error('Error creating database: ' + err.stack);
            return;
        }
        console.log("Database created or already exists");
        connection.query("USE NodeJS_ASSESSMENT", (err, res) => {
            if (err) {
                console.error('Error use database: ' + err.stack);
                return;
            }
            console.log("Database used");
        });

        connection.query("CREATE TABLE IF NOT EXISTS social_work_report (id INT AUTO_INCREMENT PRIMARY KEY, category ENUM('Education', 'Healthcare') NOT NULL , points INT NOT NULL, questions VARCHAR(500) NOT NULL, note VARCHAR(1000))", (err, res) => {
            if (err) {
                console.error('Error creating table: ' + err.stack);
                return;
            }
            console.log("Table created or already exists");
        });
    });


});

module.exports = connection;