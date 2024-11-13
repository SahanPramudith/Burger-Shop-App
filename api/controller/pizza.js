const connection=require('../db/db')



const deletepost = (req, res) => {
    connection.query('DELETE FROM pizza WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const getpost = (req, res) => {
    connection.query('SELECT * FROM pizza', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const savepost = (req, res) => {
    connection.query('INSERT INTO pizza VALUES (?, ?, ?,?)', [req.body.id, req.body.price, req.body.description,req.file.filename], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const updatepost = (req, res) => {
    connection.query('UPDATE pizza SET price = ?, description = ?,image=? WHERE id = ?', [req.body.price, req.body.description,req.file.filename, req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

module.exports = { savepost, updatepost, getpost, deletepost };
