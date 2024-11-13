const mysql = require('mysql2');

let connection;
function getconnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'sahan',
            database: 'buger'
        });
    }
    return connection;
}

module.exports = getconnection();