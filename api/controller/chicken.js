const connection=require('../db/db')



const deletepost = (req, res) => {
    connection.query('DELETE FROM chicken WHERE id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const getpost = (req, res) => {
    connection.query('SELECT * FROM chicken', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const savepost = (req, res) => {
    connection.query('INSERT INTO chicken VALUES (?, ?, ?,?)', [req.body.id, req.body.price, req.body.description,req.file.filename], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

const updatepost = (req, res) => {
    connection.query('UPDATE chicken SET price = ?, description = ?,image=? WHERE id = ?', [req.body.price, req.body.description,req.file.filename, req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
};

module.exports = { savepost, updatepost, getpost, deletepost };
