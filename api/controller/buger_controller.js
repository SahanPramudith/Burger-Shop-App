const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sahan',
    database: 'buger'
});

connection.connect();

const deletepost = (req, res) => {
    connection.query('DELETE FROM bugers WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const getpost = (req, res) => {
    connection.query('SELECT * FROM bugers', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const savepost = (req, res) => {
    connection.query('INSERT INTO bugers VALUES (?, ?, ?,?)', [req.body.id, req.body.price, req.body.description,req.file.filename], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const updatepost = (req, res) => {
    connection.query('UPDATE bugers SET price = ?, description = ?,image=? WHERE id = ?', [req.body.price, req.body.description,req.file.filename, req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

module.exports = { savepost, updatepost, getpost, deletepost };
